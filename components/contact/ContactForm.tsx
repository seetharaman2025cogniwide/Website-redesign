'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

const industries = ['Banking & Financial Services', 'Healthcare', 'Retail E-commerce', 'Telecommunications', 'Insurance', 'Logistics & Supply Chain', 'Manufacturing', 'Government', 'Other']
const interests = ['CogniAssist - Agentic AI', 'CogniLoom - Kubernetes Orchestration', 'CogniAura - Analytics & BI', 'CogniNova - Education ERP', 'CogniForge - Manufacturing ERP', 'Product Engineering Services', 'Cloud Engineering Services', 'Data Engineering Services', 'Intelligent Automation', 'General Consultation']
const budgetRanges = ['Under $50K', '$50K - $100K', '$100K - $250K', '$250K - $500K', '$500K - $1M', 'Over $1M', 'Not sure yet']
const timelines = ['Immediate (within 1 month)', 'Short-term (1-3 months)', 'Medium-term (3-6 months)', 'Long-term (6+ months)', 'Just exploring options']

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', company: '', jobTitle: '',
    phone: '', industry: '', interest: '', message: '', budget: '', timeline: ''
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 4

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  const validateStep = (step: number) => {
    const newErrors: Partial<typeof formData> = {}

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Required'
      if (!formData.lastName.trim()) newErrors.lastName = 'Required'
      if (!formData.email.trim()) newErrors.email = 'Required'
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email'
    } else if (step === 2) {
      if (!formData.company.trim()) newErrors.company = 'Required'
      if (!formData.phone.trim()) newErrors.phone = 'Required'
    } else if (step === 3) {
      if (!formData.industry) newErrors.industry = 'Required'
      if (!formData.interest) newErrors.interest = 'Required'
    } else if (step === 4) {
      if (!formData.message.trim()) newErrors.message = 'Required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(currentStep)) return

    setIsSubmitting(true)
    await new Promise(res => setTimeout(res, 1800))
    console.log('Submitted:', formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="relative bg-gradient-to-br from-blue-50 to-white h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
          <p className="text-base text-gray-600 mb-8">
            We've received your message and will reply within 24 hours.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              setIsSubmitted(false)
              setCurrentStep(1)
              setFormData({ firstName: '', lastName: '', email: '', company: '', jobTitle: '', phone: '', industry: '', interest: '', message: '', budget: '', timeline: '' })
            }}
          >
            Send Another Message
          </Button>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white pt-6 pb-4 px-4 h-full overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Get Started Today
          </h2>
          <p className="text-xs text-gray-600">Step {currentStep} of {totalSteps}</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`flex-1 h-1.5 rounded-full mx-0.5 transition-all duration-300 ${step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-xl border border-gray-200 p-6">
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Input label="First Name *" value={formData.firstName} onChange={e => handleChange('firstName', e.target.value)} error={errors.firstName} placeholder="First name" />
                  <Input label="Last Name *" value={formData.lastName} onChange={e => handleChange('lastName', e.target.value)} error={errors.lastName} placeholder="Last name" />
                </div>
                <Input label="Email Address *" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} error={errors.email} placeholder="name@company.com" />
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
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
                <Input label="Company Name *" value={formData.company} onChange={e => handleChange('company', e.target.value)} error={errors.company} placeholder="Your company name" />
                <Input label="Job Title" value={formData.jobTitle} onChange={e => handleChange('jobTitle', e.target.value)} placeholder="e.g. Director of AI, CTO" />
                <Input label="Phone Number *" type="tel" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} error={errors.phone} placeholder="Phone number" />
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
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                  <select
                    value={formData.industry}
                    onChange={e => handleChange('industry', e.target.value)}
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${errors.industry ? 'border-red-400' : 'border-gray-300'} focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition`}
                  >
                    <option value="">Select industry</option>
                    {industries.map(i => <option key={i}>{i}</option>)}
                  </select>
                  {errors.industry && <p className="text-red-600 text-xs mt-1">{errors.industry}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest *</label>
                  <select
                    value={formData.interest}
                    onChange={e => handleChange('interest', e.target.value)}
                    className={`w-full px-3 py-2 text-sm rounded-lg border ${errors.interest ? 'border-red-400' : 'border-gray-300'} focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition`}
                  >
                    <option value="">What interests you?</option>
                    {interests.map(i => <option key={i}>{i}</option>)}
                  </select>
                  {errors.interest && <p className="text-red-600 text-xs mt-1">{errors.interest}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select value={formData.budget} onChange={e => handleChange('budget', e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition">
                      <option value="">Select range</option>
                      {budgetRanges.map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                    <select value={formData.timeline} onChange={e => handleChange('timeline', e.target.value)} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition">
                      <option value="">When to start?</option>
                      {timelines.map(t => <option key={t}>{t}</option>)}
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
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tell Us About Your Project</h3>
                <Textarea
                  label="Message *"
                  value={formData.message}
                  onChange={e => handleChange('message', e.target.value)}
                  error={errors.message}
                  placeholder="Tell us about your goals, challenges, or ideas..."
                  rows={6}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-6 gap-3">
            {currentStep > 1 ? (
              <Button
                type="button"
                onClick={handleBack}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Back
              </Button>
            ) : (
              <div />
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                variant="primary"
                className="flex items-center gap-2 ml-auto"
              >
                Next
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="ml-auto"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner />
                    <span className="ml-2">Sending...</span>
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            )}
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            * Required fields
          </p>
        </form>
      </div>
    </section>
  )
}
