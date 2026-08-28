'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  PhoneIcon,
  CalendarIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  typing?: boolean
  isWelcome?: boolean
  quickReplies?: string[]
}

interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  action: string
}

const ChatbotDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickActions: QuickAction[] = [
    {
      id: 'demo',
      title: 'Schedule Demo',
      description: 'Book a personalized product demonstration',
      icon: CalendarIcon,
      action: 'I would like to schedule a demo of your AI platform'
    },
    {
      id: 'pricing',
      title: 'Pricing Info',
      description: 'Learn about our pricing plans',
      icon: DocumentTextIcon,
      action: 'Can you tell me about your pricing plans?'
    },
    {
      id: 'support',
      title: 'Technical Support',
      description: 'Get help with technical issues',
      icon: CogIcon,
      action: 'I need help with a technical issue'
    },
    {
      id: 'contact',
      title: 'Contact Sales',
      description: 'Speak with our sales team',
      icon: PhoneIcon,
      action: 'I would like to speak with your sales team'
    }
  ]

  const responses = {
    'demo': {
      text: 'I\'d be happy to help you schedule a demo! Our demos typically last 30 minutes and cover our key AI solutions. Would you prefer a live demo or would you like me to send you a link to our interactive demo?',
      quickReplies: ['Live demo', 'Interactive demo', 'Send me more info']
    },
    'pricing': {
      text: 'Our pricing is tailored to your specific needs and scale. We offer flexible plans starting from enterprise packages. I can connect you with our sales team for a detailed quote, or would you like me to send you our pricing guide?',
      quickReplies: ['Contact sales', 'Send pricing guide', 'Tell me about features']
    },
    'support': {
      text: 'I\'m here to help with any technical questions! Our support team handles everything from integration assistance to troubleshooting. What specific area do you need help with?',
      quickReplies: ['Integration help', 'API documentation', 'Troubleshooting']
    },
    'contact': {
      text: 'I\'ll connect you with our sales team right away! They can provide detailed information about our solutions and help create a custom plan for your needs. What\'s the best way to reach you?',
      quickReplies: ['Schedule a call', 'Send me an email', 'Live chat now']
    },
    'default': {
      text: 'Thanks for your question! I\'m here to help you learn about Cogniwide\'s AI solutions. I can assist with demos, pricing, technical support, or connecting you with our team.',
      quickReplies: ['Schedule demo', 'Pricing info', 'Technical support']
    }
  }

  useEffect(() => {
    if (isOpen && messages.length === 0 && !showWelcome) {
      const initialMessage: Message = {
        id: '1',
        text: 'Hi there! I\'m your AI assistant from Cogniwide. I\'m here to help you learn about our enterprise AI solutions. How can I assist you today?',
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: ['Schedule demo', 'Pricing info', 'Technical support', 'Contact sales']
      }
      setMessages([initialMessage])
    }
  }, [isOpen, showWelcome])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text?: string) => {
    const messageText = text || inputText
    if (!messageText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)
    setShowWelcome(false)

    // Simulate AI response delay
    setTimeout(() => {
      const responseKey = Object.keys(responses).find(key =>
        messageText.toLowerCase().includes(key)
      ) || 'default'

      const response = responses[responseKey as keyof typeof responses]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: response.quickReplies
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1200)
  }

  const handleQuickAction = (action: QuickAction) => {
    sendMessage(action.action)
  }

  const handleQuickReply = (reply: string) => {
    sendMessage(reply)
  }

  const exportConversation = () => {
    const conversation = messages.map(msg =>
      `${msg.sender === 'user' ? 'You' : 'AI Assistant'}: ${msg.text}`
    ).join('\n')

    const blob = new Blob([conversation], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'conversation-export.txt'
    a.click()
    URL.revokeObjectURL(url)
  }

  const resetChat = () => {
    setMessages([])
    setInputText('')
    setIsTyping(false)
    setShowWelcome(true)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-brand-blue rounded-full shadow-lg flex items-center justify-center z-50 group"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { scale: 0 } : { scale: 1 }}
      >
        <ChatBubbleLeftRightIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-brand-red rounded-full flex items-center justify-center">
          <SparklesIcon className="w-3 h-3 text-white" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-6 right-6 w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 ${isMinimized ? 'h-16' : 'h-[600px]'
              }`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              height: isMinimized ? 64 : 600
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-brand-blue p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Cogniwide AI Assistant
                  </h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                    <p className="text-sm text-white/90">Online</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMinimize}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <motion.div
                    animate={{ rotate: isMinimized ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Welcome Menu */}
            {!isMinimized && showWelcome && (
              <div className="flex-1 p-6 bg-gray-50">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <SparklesIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Welcome to Cogniwide!
                  </h3>
                  <p className="text-gray-600 text-sm">
                    I'm your AI assistant. How can I help you today?
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.id}
                      onClick={() => handleQuickAction(action)}
                      className="p-4 bg-white rounded-lg border border-gray-200 hover:border-brand-blue hover:shadow-md transition-all duration-200 text-left group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <action.icon className="w-6 h-6 text-brand-blue mb-2 group-hover:scale-110 transition-transform duration-200" />
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {action.title}
                      </h4>
                      <p className="text-gray-500 text-xs">
                        {action.description}
                      </p>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowWelcome(false)}
                    className="text-sm text-gray-500 hover:text-brand-blue transition-colors"
                  >
                    Or type your question below
                  </button>
                </div>
              </div>
            )}

            {/* Messages */}
            {!isMinimized && !showWelcome && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`max-w-[85%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                      {message.sender === 'bot' && (
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                            <SparklesIcon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-xs text-gray-500 font-medium">AI Assistant</span>
                        </div>
                      )}
                      <div
                        className={`p-4 rounded-xl shadow-sm ${message.sender === 'user'
                            ? 'bg-brand-blue text-white ml-8'
                            : 'bg-white text-gray-800 border border-gray-200'
                          }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>

                      {/* Quick Replies */}
                      {message.quickReplies && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {message.quickReplies.map((reply, index) => (
                            <button
                              key={index}
                              onClick={() => handleQuickReply(reply)}
                              className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs text-gray-700 hover:border-brand-blue hover:bg-blue-50 transition-colors duration-200"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    className="flex justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                        <SparklesIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-gray-200 ml-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Input */}
            {!isMinimized && (
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex space-x-3 mb-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                      placeholder="Type your message..."
                      className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent text-sm bg-gray-50"
                    />
                    <button
                      onClick={() => sendMessage()}
                      disabled={!inputText.trim() || isTyping}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-brand-blue text-white rounded-lg hover:bg-brand-blue-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      <PaperAirplaneIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={exportConversation}
                      className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <ArrowDownTrayIcon className="w-3 h-3" />
                      <span>Export</span>
                    </button>
                    <button
                      onClick={resetChat}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      New Chat
                    </button>
                  </div>
                  <div className="text-gray-400">
                    Powered by Cogniwide AI
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatbotDemo