'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { usePersonalization } from './PersonalizationProvider';

interface ProfilingQuestion {
  id: string;
  question: string;
  type: 'select' | 'multiselect' | 'text';
  options?: string[];
  field: keyof any; // UserProfile field
  priority: number;
  condition?: (profile: any) => boolean;
}

const profilingQuestions: ProfilingQuestion[] = [
  {
    id: 'industry',
    question: 'What industry is your organization in?',
    type: 'select',
    options: ['Banking', 'Healthcare', 'Retail', 'Telecom', 'Insurance', 'Logistics', 'Other'],
    field: 'industry',
    priority: 1,
  },
  {
    id: 'role',
    question: 'What is your role?',
    type: 'select',
    options: ['CEO/Executive', 'CTO/Technology Leader', 'IT Manager', 'Business Analyst', 'Developer', 'Other'],
    field: 'role',
    priority: 2,
  },
  {
    id: 'company_size',
    question: 'What is your company size?',
    type: 'select',
    options: ['1-50 employees', '51-200 employees', '201-1000 employees', '1000+ employees'],
    field: 'company',
    priority: 3,
  },
  {
    id: 'ai_experience',
    question: 'What is your experience with AI?',
    type: 'select',
    options: ['No experience', 'Some knowledge', 'Experienced', 'Expert'],
    field: 'interests',
    priority: 4,
    condition: (profile) => profile.engagementScore > 20,
  },
  {
    id: 'use_cases',
    question: 'Which AI use cases interest you most?',
    type: 'multiselect',
    options: ['Customer Service', 'Process Automation', 'Data Analysis', 'Document Processing', 'Fraud Detection', 'Personalization'],
    field: 'interests',
    priority: 5,
    condition: (profile) => profile.sessionCount > 2,
  },
];

interface ProgressiveProfilingProps {
  trigger?: 'engagement' | 'time' | 'manual';
  engagementThreshold?: number;
  timeThreshold?: number; // in seconds
  maxQuestions?: number;
}

export function ProgressiveProfiling({
  trigger = 'engagement',
  engagementThreshold = 30,
  timeThreshold = 60,
  maxQuestions = 2,
}: ProgressiveProfilingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [availableQuestions, setAvailableQuestions] = useState<ProfilingQuestion[]>([]);
  
  const { userProfile, updateProfile, hasConsent } = usePersonalization();

  useEffect(() => {
    if (!hasConsent || !userProfile) return;

    // Filter questions based on conditions and what we already know
    const filtered = profilingQuestions
      .filter(q => {
        // Check if we already have this information
        if (q.field === 'industry' && userProfile.industry) return false;
        if (q.field === 'role' && userProfile.role) return false;
        
        // Check conditions
        if (q.condition && !q.condition(userProfile)) return false;
        
        return true;
      })
      .sort((a, b) => a.priority - b.priority)
      .slice(0, maxQuestions);

    setAvailableQuestions(filtered);

    // Determine if we should show the profiling
    let shouldShow = false;
    
    switch (trigger) {
      case 'engagement':
        shouldShow = userProfile.engagementScore >= engagementThreshold;
        break;
      case 'time':
        // This would need to be implemented with a timer
        break;
      case 'manual':
        // Controlled externally
        break;
    }

    if (shouldShow && filtered.length > 0) {
      // Delay showing to not interrupt user flow
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [userProfile, hasConsent, trigger, engagementThreshold, maxQuestions]);

  const handleAnswer = (answer: any) => {
    const currentQuestion = availableQuestions[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    if (currentQuestionIndex < availableQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, update profile
      handleComplete(newAnswers);
    }
  };

  const handleComplete = (finalAnswers: Record<string, any>) => {
    // Convert answers to profile updates
    const profileUpdates: any = {};
    
    availableQuestions.forEach(question => {
      const answer = finalAnswers[question.id];
      if (answer) {
        if (question.field === 'interests') {
          // Handle interests specially
          const currentInterests = userProfile?.interests || [];
          if (Array.isArray(answer)) {
            profileUpdates.interests = Array.from(new Set([...currentInterests, ...answer]));
          } else {
            profileUpdates.interests = Array.from(new Set([...currentInterests, answer]));
          }
        } else {
          profileUpdates[question.field] = answer;
        }
      }
    });

    updateProfile(profileUpdates);
    setIsVisible(false);
    
    // Reset for next time
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleSkip = () => {
    if (currentQuestionIndex < availableQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsVisible(false);
      setCurrentQuestionIndex(0);
      setAnswers({});
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  if (!availableQuestions.length || !isVisible) {
    return null;
  }

  const currentQuestion = availableQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / availableQuestions.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
        >
          <Card className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Help us personalize your experience
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Question {currentQuestionIndex + 1} of {availableQuestions.length}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question */}
            <div className="mb-6">
              <h4 className="text-base font-medium text-gray-900 mb-4">
                {currentQuestion.question}
              </h4>

              {currentQuestion.type === 'select' && (
                <div className="space-y-2">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option.toLowerCase())}
                      className="w-full text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'multiselect' && (
                <div className="space-y-2">
                  {currentQuestion.options?.map((option) => (
                    <label key={option} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <input
                        type="checkbox"
                        className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        onChange={(e) => {
                          const currentAnswers = answers[currentQuestion.id] || [];
                          if (e.target.checked) {
                            setAnswers({
                              ...answers,
                              [currentQuestion.id]: [...currentAnswers, option.toLowerCase()]
                            });
                          } else {
                            setAnswers({
                              ...answers,
                              [currentQuestion.id]: currentAnswers.filter((a: string) => a !== option.toLowerCase())
                            });
                          }
                        }}
                      />
                      {option}
                    </label>
                  ))}
                  <div className="mt-4">
                    <Button
                      variant="primary"
                      onClick={() => handleAnswer(answers[currentQuestion.id] || [])}
                      disabled={!answers[currentQuestion.id]?.length}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}

              {currentQuestion.type === 'text' && (
                <div>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type your answer..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleAnswer((e.target as HTMLInputElement).value);
                      }
                    }}
                  />
                  <div className="mt-4">
                    <Button
                      variant="primary"
                      onClick={() => {
                        const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                        handleAnswer(input.value);
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleSkip}>
                Skip
              </Button>
              <div className="text-sm text-gray-500">
                Your data is private and secure
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}