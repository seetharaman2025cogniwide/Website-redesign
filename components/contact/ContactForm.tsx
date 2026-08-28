'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { ArrowRightIcon, ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const industries = [
  'Banking & Financial Services',
  'Healthcare',
  'Retail & E-commerce',
  'Telecommunications',
  'Insurance',
  'Logistics & Supply Chain',
  'Manufacturing',
  'Government',
  'Other',
];

const interests = [
  'CogniAssist - Agentic AI',
  'CogniLoom - Kubernetes Orchestration',
  'CogniAura - Analytics & BI',
  'CogniNova - Education ERP',
  'CogniForge - Manufacturing ERP',
  'CogniVibe - SDLC Automation',
  'CogniTest - Test Automation',
  'CogniOps - DevOps Automation',
  'General AI Consultation',
];

const budgetRanges = [
  'Under $50K',
  '$50K - $100K',
  '$100K - $250K',
  '$250K - $500K',
  '$500K - $1M',
  'Over $1M',
  'Not sure yet',
];

const timelines = [
  'Immediate (within 1 month)',
  'Short-term (1-3 months)',
  'Medium-term (3-6 months)',
  'Long-term (6+ months)',
  'Just exploring options',
];

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    industry: '',
    interest: '',
    message: '',
    budget: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep = (step: number) => {
    const newErrors: Partial<typeof formData> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Required';
      if (!formData.email.trim()) newErrors.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    } else if (step === 2) {
      if (!formData.company.trim()) newErrors.company = 'Required';
      if (!formData.phone.trim()) newErrors.phone = 'Required';
    } else if (step === 3) {
      if (!formData.industry) newErrors.industry = 'Required';
      if (!formData.interest) newErrors.interest = 'Required';
    } else if (step === 4) {
      if (!formData.message.trim()) newErrors.message = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1800));
    console.log('Submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="relative bg-[#0B0A14] h-full flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center bg-[#15151D] p-10 rounded-3xl border border-[#29263A] shadow-[0_0_40px_rgba(124,58,237,0.2)]"
        >
          <div className="w-16 h-16 bg-[#1A1829] border border-[#8B5CF6]/40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            <CheckCircleIcon className="w-8 h-8 text-[#A78BFA]" />
          </div>
          <h3 className="text-3xl font-extrabold text-white mb-3">Thank You!</h3>
          <p className="text-base text-[#B8B6C4] mb-8 leading-relaxed">
            We've received your project details and will reply within 24 hours.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                company: '',
                jobTitle: '',
                phone: '',
                industry: '',
                interest: '',
                message: '',
                budget: '',
                timeline: '',
              });
            }}
            className="px-8 py-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all"
          >
            Send Another Message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative bg-[#0B0A14] pt-8 pb-12 px-4 h-full overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#8B5CF6]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Get Started Today
          </h2>
          <p className="text-xs sm:text-sm text-[#A78BFA] font-medium">
            Step {currentStep} of {totalSteps}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex-1 h-1.5 rounded-full mx-1 transition-all duration-300 ${
                  step <= currentStep
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] shadow-[0_0_10px_#8B5CF6]'
                    : 'bg-[#1A1829] border border-[#29263A]'
                }`}
              />
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#15151D]/90 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] border border-[#29263A] p-6 sm:p-8 backdrop-blur-xl"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="text-lg font-bold text-white mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">First Name *</label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder-[#777583]"
                    />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      placeholder="Last name"
                      className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder-[#777583]"
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder-[#777583]"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </motion.div>
            )}

            {/* Step 2: Company Info */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="text-lg font-bold text-white mb-4">Company Details</h3>
                <div>
                  <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Company Name *</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder-[#777583]"
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Job Title</label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => handleChange('jobTitle', e.target.value)}
                    placeholder="e.g. Director of AI, CTO"
                    className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder-[#777583]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="Phone number"
                    className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder-[#777583]"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </motion.div>
            )}

            {/* Step 3: Project Info */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>
                <div>
                  <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Industry *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleChange('industry', e.target.value)}
                    className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                  >
                    <option value="" className="bg-[#15151D] text-gray-400">Select industry</option>
                    {industries.map((i) => (
                      <option key={i} value={i} className="bg-[#15151D] text-white">
                        {i}
                      </option>
                    ))}
                  </select>
                  {errors.industry && <p className="text-red-400 text-xs mt-1">{errors.industry}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Area of Interest *</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => handleChange('interest', e.target.value)}
                    className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                  >
                    <option value="" className="bg-[#15151D] text-gray-400">What interests you?</option>
                    {interests.map((i) => (
                      <option key={i} value={i} className="bg-[#15151D] text-white">
                        {i}
                      </option>
                    ))}
                  </select>
                  {errors.interest && <p className="text-red-400 text-xs mt-1">{errors.interest}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleChange('budget', e.target.value)}
                      className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] transition-all"
                    >
                      <option value="" className="bg-[#15151D] text-gray-400">Select range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-[#15151D] text-white">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] transition-all"
                    >
                      <option value="" className="bg-[#15151D] text-gray-400">When to start?</option>
                      {timelines.map((t) => (
                        <option key={t} value={t} className="bg-[#15151D] text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Message */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-5"
              >
                <h3 className="text-lg font-bold text-white mb-4">Tell Us About Your Project</h3>
                <div>
                  <label className="block text-xs font-semibold text-[#B8B6C4] mb-2">Message *</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Describe your project, goals, or requirements..."
                    className="w-full px-4 py-3 bg-[#1A1829] text-white border border-[#29263A] rounded-xl text-sm focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all placeholder-[#777583]"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#29263A]">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl border border-[#29263A] bg-[#1A1829] text-[#B8B6C4] hover:text-white hover:border-[#8B5CF6]/50 transition-all text-xs font-semibold flex items-center gap-2"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white rounded-xl text-xs font-bold shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all flex items-center gap-2"
              >
                Next
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2.5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white rounded-xl text-xs font-bold shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Message</span>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
