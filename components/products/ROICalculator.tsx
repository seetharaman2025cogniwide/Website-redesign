'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import Section from '@/components/layout/Section'

interface ROICalculatorProps {
  productName: string
}

const ROICalculator = ({ productName }: ROICalculatorProps) => {
  const [inputs, setInputs] = useState({
    monthlyTickets: '',
    avgHandlingTime: '',
    agentHourlyCost: '',
    automationRate: '75'
  })

  const [results, setResults] = useState({
    monthlySavings: 0,
    annualSavings: 0,
    hoursAutomated: 0,
    roi: 0
  })

  const calculateROI = () => {
    const tickets = parseInt(inputs.monthlyTickets) || 0
    const handlingTime = parseFloat(inputs.avgHandlingTime) || 0
    const hourlyCost = parseFloat(inputs.agentHourlyCost) || 0
    const automationRate = parseFloat(inputs.automationRate) / 100

    const automatedTickets = tickets * automationRate
    const hoursAutomated = (automatedTickets * handlingTime) / 60
    const monthlySavings = hoursAutomated * hourlyCost
    const annualSavings = monthlySavings * 12

    // Assuming platform cost is 20% of savings (conservative estimate)
    const platformCost = annualSavings * 0.2
    const roi = ((annualSavings - platformCost) / platformCost) * 100

    setResults({
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      hoursAutomated: Math.round(hoursAutomated),
      roi: Math.round(roi)
    })
  }

  const title = `${productName} ROI Calculator`

  return (
    <Section background="light-grey" padding="lg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-brand-dark-grey mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-brand-medium-grey"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Estimate your potential efficiency gains and return on investment
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card padding="lg">
              <h3 className="text-xl font-semibold text-brand-dark-grey mb-6">
                Your Current Metrics
              </h3>
              
              <div className="space-y-6">
                <Input
                  label="Monthly Support Tickets"
                  type="number"
                  value={inputs.monthlyTickets}
                  onChange={(e) => setInputs({...inputs, monthlyTickets: e.target.value})}
                  placeholder="e.g., 1000"
                />
                
                <Input
                  label="Average Handling Time (minutes)"
                  type="number"
                  value={inputs.avgHandlingTime}
                  onChange={(e) => setInputs({...inputs, avgHandlingTime: e.target.value})}
                  placeholder="e.g., 15"
                />
                
                <Input
                  label="Agent Hourly Cost ($)"
                  type="number"
                  value={inputs.agentHourlyCost}
                  onChange={(e) => setInputs({...inputs, agentHourlyCost: e.target.value})}
                  placeholder="e.g., 25"
                />
                
                <Input
                  label="Expected Automation Rate (%)"
                  type="number"
                  value={inputs.automationRate}
                  onChange={(e) => setInputs({...inputs, automationRate: e.target.value})}
                  placeholder="75"
                  helperText="Typical range: 60-85%"
                />
                
                <Button 
                  variant="primary" 
                  onClick={calculateROI}
                  className="w-full"
                >
                  Calculate ROI
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card padding="lg" className="shadow-lg">
              <h3 className="text-xl font-semibold text-brand-dark-grey mb-6">
                Your Potential Savings
              </h3>
              
              <div className="space-y-6">
                <div className="text-center p-6 bg-brand-yellow/10 rounded-lg">
                  <div className="text-3xl font-bold text-brand-dark-grey">
                    {results.annualSavings > 0 ? 'Significant' : '-'}
                  </div>
                  <div className="text-sm text-brand-medium-grey">Annual Savings Potential</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-brand-light-grey rounded-lg">
                    <div className="text-xl font-semibold text-brand-dark-grey">
                      {results.monthlySavings > 0 ? 'Substantial' : '-'}
                    </div>
                    <div className="text-xs text-brand-medium-grey">Monthly Efficiency</div>
                  </div>
                  
                  <div className="text-center p-4 bg-brand-light-grey rounded-lg">
                    <div className="text-xl font-semibold text-brand-dark-grey">
                      {results.hoursAutomated.toLocaleString()}
                    </div>
                    <div className="text-xs text-brand-medium-grey">Hours Automated</div>
                  </div>
                </div>
                
                <div className="text-center p-4 border-2 border-brand-yellow rounded-lg">
                  <div className="text-2xl font-bold text-brand-dark-grey">
                    {results.roi}% ROI
                  </div>
                  <div className="text-sm text-brand-medium-grey">Return on Investment</div>
                </div>
                
                <div className="text-xs text-brand-medium-grey text-center">
                  * Calculations are estimates based on industry averages
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default ROICalculator
export { ROICalculator }