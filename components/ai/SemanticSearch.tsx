'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CogIcon
} from '@heroicons/react/24/outline'

interface SearchResult {
  id: string
  title: string
  description: string
  type: 'product' | 'service' | 'resource' | 'industry'
  url: string
  relevanceScore: number
  category: string
}

const SemanticSearch = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  // Mock search data
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'CogniAssist - Agentic AI Platform',
      description: 'Orchestrate intelligent agents that automate complex business processes with human-like reasoning.',
      type: 'product',
      url: '/products/cogniassist',
      relevanceScore: 0.95,
      category: 'AI Products'
    },
    {
      id: '2',
      title: 'CogniLoom - Kubernetes Orchestration',
      description: 'AI-powered Kubernetes management platform with intelligent automation and monitoring.',
      type: 'product',
      url: '/products/cogniloom',
      relevanceScore: 0.92,
      category: 'AI Products'
    },
    {
      id: '3',
      title: 'CogniAura - Analytics & BI Platform',
      description: 'Transform your data into actionable insights with AI-powered analytics and one-click BI migration.',
      type: 'product',
      url: '/products/cogniaura',
      relevanceScore: 0.88,
      category: 'AI Products'
    },
    {
      id: '4',
      title: 'Product Engineering Services',
      description: 'End-to-end product development with modern technologies and agile methodologies.',
      type: 'service',
      url: '/services/product-engineering',
      relevanceScore: 0.85,
      category: 'Services'
    },
    {
      id: '5',
      title: 'Banking & Financial Services',
      description: 'AI solutions for banking, including fraud detection, customer service, and compliance.',
      type: 'industry',
      url: '/industries/banking',
      relevanceScore: 0.82,
      category: 'Industries'
    },
    {
      id: '6',
      title: 'Healthcare AI Solutions',
      description: 'Intelligent automation for healthcare providers, including patient care and compliance.',
      type: 'industry',
      url: '/industries/healthcare',
      relevanceScore: 0.80,
      category: 'Industries'
    }
  ]

  const searchSuggestions = [
    'conversational AI',
    'document processing',
    'enterprise automation',
    'chatbot development',
    'AI agents',
    'banking solutions',
    'healthcare AI',
    'cloud engineering',
    'data engineering'
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      setShowResults(false)
      return
    }

    setIsSearching(true)
    setShowResults(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Simple semantic search simulation
    const filteredResults = searchData
      .filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, 6)

    setResults(filteredResults)
    setIsSearching(false)
  }

  const handleInputChange = (value: string) => {
    setQuery(value)

    if (value.length > 0) {
      const matchingSuggestions = searchSuggestions
        .filter(suggestion =>
          suggestion.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5)
      setSuggestions(matchingSuggestions)
    } else {
      setSuggestions([])
    }

    // Debounced search
    const timeoutId = setTimeout(() => {
      performSearch(value)
    }, 300)

    return () => clearTimeout(timeoutId)
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product':
        return <CogIcon className="w-4 h-4" />
      case 'service':
        return <ChatBubbleLeftRightIcon className="w-4 h-4" />
      default:
        return <DocumentTextIcon className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'product':
        return 'text-blue-600 bg-blue-50'
      case 'service':
        return 'text-green-600 bg-green-50'
      case 'industry':
        return 'text-purple-600 bg-purple-50'
      default:
        return 'text-gray-600 bg-gray-50'
    }
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-brand-medium-grey" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => query && setShowResults(true)}
          placeholder="Search products, services, industries..."
          className="w-full pl-12 pr-12 py-4 text-lg border-2 border-brand-light-grey rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all duration-200"
        />

        {query && (
          <button
            onClick={() => {
              setQuery('')
              setResults([])
              setShowResults(false)
              setSuggestions([])
            }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            <XMarkIcon className="h-5 w-5 text-brand-medium-grey hover:text-brand-dark-grey transition-colors" />
          </button>
        )}
      </div>

      {/* Search Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 bg-brand-white rounded-2xl shadow-strong border border-brand-light-grey z-50 max-h-96 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Suggestions */}
            {suggestions.length > 0 && !isSearching && results.length === 0 && (
              <div className="p-4 border-b border-brand-light-grey">
                <h4 className="text-sm font-semibold text-brand-medium-grey mb-2 uppercase tracking-wide">
                  Suggestions
                </h4>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setQuery(suggestion)
                        performSearch(suggestion)
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-brand-dark-grey hover:bg-brand-light-grey rounded-lg transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading */}
            {isSearching && (
              <div className="p-8 text-center">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-brand-yellow border-t-transparent rounded-full animate-spin" />
                  <span className="text-brand-medium-grey">Searching...</span>
                </div>
              </div>
            )}

            {/* Results */}
            {!isSearching && results.length > 0 && (
              <div className="max-h-80 overflow-y-auto">
                <div className="p-2">
                  <div className="text-xs text-brand-medium-grey px-3 py-2">
                    {results.length} results found
                  </div>
                  {results.map((result, index) => (
                    <motion.a
                      key={result.id}
                      href={result.url}
                      className="block p-3 hover:bg-brand-light-grey rounded-lg transition-colors"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${getTypeColor(result.type)}`}>
                          {getTypeIcon(result.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-sm font-semibold text-brand-dark-grey truncate">
                              {result.title}
                            </h3>
                            <span className="text-xs text-brand-medium-grey">
                              {Math.round(result.relevanceScore * 100)}% match
                            </span>
                          </div>
                          <p className="text-xs text-brand-medium-grey line-clamp-2">
                            {result.description}
                          </p>
                          <div className="mt-1">
                            <span className="inline-block px-2 py-1 text-xs font-medium bg-brand-yellow/10 text-brand-dark-grey rounded">
                              {result.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* No Results */}
            {!isSearching && query && results.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-brand-medium-grey">
                  No results found for "{query}"
                </p>
                <p className="text-sm text-brand-medium-grey mt-2">
                  Try searching for products, services, or industries
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SemanticSearch