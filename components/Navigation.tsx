'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChartBarIcon,
  CogIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
  CloudIcon,
  PresentationChartBarIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  BeakerIcon,
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  SignalIcon,
  BriefcaseIcon,
  LifebuoyIcon,
  AcademicCapIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationItem {
  name: string
  href: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  image?: string
  features?: string[]
  useCases?: string[]
  impact?: string[]
  color?: string
}

interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

interface NavigationSection {
  title: string
  icon: any
  color: string
  groups: NavigationGroup[]
  featured?: NavigationItem
}

const Navigation = () => {
  const pathname = usePathname()
  // Pages that sit on the near-black violet canvas get the dark navbar.
  const darkRoutes = ['/about', '/careers', '/blog', '/solutions', '/products', '/contact']
  const isDark = pathname === '/' || darkRoutes.some((route) => pathname?.startsWith(route))
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  // Individual navigation items with proper SVG icons
  const navigationItems = [
    { name: 'Products', href: '#', icon: CogIcon, hasDropdown: true },
    { name: 'Solutions', href: '#', icon: BoltIcon, hasDropdown: true },
    { name: 'Services', href: '#', icon: UserGroupIcon, hasDropdown: true },
    { name: 'Industries', href: '#', icon: BuildingOfficeIcon, hasDropdown: true },
    { name: 'About', href: '#', icon: BuildingOffice2Icon, hasDropdown: true }
  ]

  const dropdownContent: Record<string, any> = {
    'Products': {
      layout: 'mega-menu',
      featured: {
        title: 'AI Across the SDLC',
        href: '/products',
        icon: BoltIcon
      },
      products: [
        {
          name: 'CogniAssist',
          href: '/products/cogniassist',
          description: 'Agentic AI Platform',
          icon: RocketLaunchIcon,
          badge: 'POPULAR',
          color: 'linear-gradient(135deg, #7c3aed, #9333ea)',
          features: [
            'Multi-Agent Orchestration',
            'AI Engineering No-code & Pro-code tools',
            'AI Observability, Security & Governance',
            'Integrations'
          ]
        },
        {
          name: 'CogniLoom',
          href: '/products/cogniloom',
          description: 'AI-Powered Kubernetes Orchestration',
          icon: CloudIcon,
          badge: 'POPULAR',
          color: 'linear-gradient(135deg, #0284c7, #2563eb)',
          features: [
            'Multicloud Finops',
            'Multicloud Governance and Compliance',
            'Office 365 Optimizer',
            'Internal Developer Portal'
          ]
        },
        {
          name: 'CogniAura',
          href: '/products/cogniaura',
          description: 'Analytics & BI Platform',
          icon: PresentationChartBarIcon,
          color: 'linear-gradient(135deg, #0d9488, #059669)',
          features: [
            'Automated Data Visualizations',
            'Predictive Trend Analysis',
            'Natural Language Querying (NLQ)',
            'Custom Executive Dashboards'
          ]
        },
        {
          name: 'CogniNova',
          href: '/products/cogninova',
          description: 'AI-Powered School ERP and LMS',
          icon: AcademicCapIcon,
          color: 'linear-gradient(135deg, #4f46e5, #2563eb)',
          features: [
            'Student Information System (SIS)',
            'AI-Assisted Grading & Feedback',
            'Curriculum & Lesson Planning',
            'Parent-Teacher Communication Portal'
          ]
        },
        {
          name: 'CogniForge',
          href: '/products/cogniforge',
          description: 'ERP for Manufacturing Companies',
          icon: WrenchIcon,
          color: 'linear-gradient(135deg, #ea580c, #dc2626)',
          features: [
            'Production Planning',
            'Inventory Management',
            'Quality Control',
            'Supply Chain Optimization'
          ]
        }
      ]
    },
    'Solutions': {
      layout: 'single-column',
      items: [
        {
          name: 'CogniVibe',
          href: '/solutions/cognivibe',
          description: 'AI powered SDLC framework',
          icon: BoltIcon,
          color: 'from-indigo-600 to-purple-600'
        },
        {
          name: 'CogniTest',
          href: '/solutions/cognitest',
          description: 'AI powered test automation',
          icon: BeakerIcon,
          color: 'from-emerald-600 to-teal-600'
        },
        {
          name: 'CogniOps',
          href: '/solutions/cogniops',
          description: 'DevOps automation',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-600 to-red-600'
        }
      ]
    },
    'Services': {
      layout: 'two-column',
      leftItems: [
        { name: 'AI Consulting', href: '/services/ai-consulting', description: 'Strategic AI implementation', icon: CursorArrowRaysIcon, color: 'from-purple-600 to-indigo-600' },
        { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions', icon: ComputerDesktopIcon, color: 'from-sky-600 to-blue-600' },
        { name: 'Data Engineering', href: '/services/data-engineering', description: 'Data pipeline solutions', icon: ChartBarIcon, color: 'from-teal-600 to-emerald-600' }
      ],
      rightItems: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud transformation', icon: CloudIcon, color: 'from-orange-600 to-red-600' },
        { name: 'Intelligent Automation', href: '/services/intelligent-automation', description: 'Business process automation', icon: BoltIcon, color: 'from-blue-600 to-indigo-600' },
        { name: 'Quality Engineering', href: '/services/quality-engineering', description: 'AI-driven quality assurance', icon: ShieldCheckIcon, color: 'from-emerald-500 to-teal-600' }
      ]
    },
    'Industries': {
      layout: 'two-column',
      leftItems: [
        {
          name: 'Banking & Finance',
          href: '/industries/banking',
          description: 'Financial AI solutions',
          icon: BanknotesIcon,
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'Healthcare',
          href: '/industries/healthcare',
          description: 'Healthcare automation',
          icon: HeartIcon,
          color: 'from-rose-600 to-pink-600'
        },
        {
          name: 'Retail',
          href: '/industries/retail',
          description: 'Retail intelligence',
          icon: ShoppingBagIcon,
          color: 'from-amber-600 to-orange-600'
        },
        {
          name: 'Education',
          href: '/industries/education',
          description: 'AI-powered learning solutions',
          icon: AcademicCapIcon,
          color: 'from-indigo-600 to-purple-600'
        }
      ],
      rightItems: [
        {
          name: 'Insurance',
          href: '/industries/insurance',
          description: 'Process automation',
          icon: ShieldCheckIcon,
          color: 'from-teal-600 to-emerald-600'
        },
        {
          name: 'Manufacturing',
          href: '/industries/logistics',
          description: 'Supply chain optimization',
          icon: TruckIcon,
          color: 'from-cyan-600 to-sky-600'
        },
        {
          name: 'Telecommunications',
          href: '/industries/telecom',
          description: 'Network optimization',
          icon: SignalIcon,
          color: 'from-violet-600 to-fuchsia-600'
        }
      ]
    },
    'About': {
      layout: 'two-column',
      leftItems: [
        { name: 'About us', href: '/about', description: 'Our story and mission', icon: BuildingOffice2Icon, color: 'from-blue-600 to-indigo-600' },
        { name: 'Life at Cogniwide', href: '/about/life-at-cogniwide', description: 'Culture and team', icon: LifebuoyIcon, color: 'from-green-500 to-teal-500' }
      ],
      rightItems: [
        { name: 'Careers', href: '/careers', description: 'Join our team', icon: BriefcaseIcon, color: 'from-rose-600 to-pink-600' },
        { name: 'Blog', href: '/blog', description: 'New Ideas, Reflections, Coding Hacks, and more', icon: PresentationChartBarIcon, color: 'from-amber-600 to-orange-600' }
      ]
    }
  }

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  const closeDropdown = () => {
    setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const handleMouseEnter = (itemName: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 200) // 200ms delay before closing
    setCloseTimeout(timeout)
  }

  // Remove unused state and effect since we made it solid
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${isDark
      ? 'bg-[#08090B]/85 border-b border-[#29263A] shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
      : 'bg-white/80 border-b border-white/40 shadow-sm opacity-95'
      }`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative py-1">
                <div className={`absolute inset-0 rounded-xl blur-md -z-10 group-hover:blur-xl transition-all duration-300 ${isDark ? 'bg-[#8B5CF6]/30' : 'bg-white/40'}`} suppressHydrationWarning></div>
                <Image
                  src="/logo-dark-2.png"
                  alt="Cogniwide"
                  width={200}
                  height={50}
                  className="h-11 md:h-12 w-auto group-hover:scale-105 transition-all duration-300 relative z-10 filter brightness-115 contrast-105 drop-shadow-[0_0_18px_rgba(139,92,246,0.35)]"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Compact */}
          <div className="hidden lg:block flex-1 mx-auto">
            <div className="flex items-center justify-center space-x-8">
              {navigationItems.map((item) => {
                const content = dropdownContent[item.name];
                const isTwoColumn = content.layout === 'two-column';

                return (
                  <div
                    key={item.name}
                    className="relative h-20 flex items-center"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className={`flex items-center space-x-1.5 px-3 py-1.5 text-[14px] font-bold transition-all duration-300 rounded-lg ${isDark
                      ? (activeDropdown === item.name ? 'text-[#A78BFA] bg-[#15151D]' : 'text-gray-200 hover:text-white hover:bg-white/10')
                      : (activeDropdown === item.name ? 'text-brand-blue bg-white/60' : 'text-gray-800 hover:bg-white/60')
                      }`}>
                      <span>{item.name}</span>
                      <span className={`transition-transform duration-200 flex items-center ${activeDropdown === item.name ? 'rotate-180 text-[#A78BFA]' : (isDark ? 'text-gray-400' : 'text-gray-500')
                        }`}>
                        <ChevronDownIcon className="w-3 h-3" />
                      </span>
                    </button>

                    {activeDropdown === item.name && content.layout === 'mega-menu' && (
                      <div className="fixed left-0 right-0 top-20 pt-2 z-50 flex justify-center">
                        <div className="w-[1280px]">
                          <div className={`backdrop-blur-xl rounded-2xl overflow-hidden ${isDark
                            ? 'bg-[#15151D]/95 border border-[#29263A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white'
                            : 'bg-white/95 border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]'
                            }`}>
                            {/* Mega Menu Layout */}
                            <div>
                              {/* Featured Banner */}
                              {content.featured && (
                                <Link
                                  href={content.featured.href}
                                  className={`block px-12 py-3 transition-all duration-300 group ${isDark ? 'bg-[#1A1829] hover:bg-[#201D36] text-white border-b border-[#29263A]' : 'bg-brand-blue-dark text-white hover:bg-brand-blue-dark'}`}
                                  onClick={closeDropdown}
                                >
                                  <div className="flex items-center justify-center space-x-3">
                                    <span className="text-white font-medium text-sm hover:text-white flex items-center space-x-2">
                                      <span>✨</span>
                                      <span>{content.featured.title}</span>
                                      <span>✨</span>
                                    </span>
                                    <div className="relative w-5 h-5 transition-transform duration-500 group-hover:translate-x-2">
                                      <Image
                                        src=""
                                        alt="AI Icon"
                                        fill
                                        className="object-contain"
                                        onError={(e) => {
                                          (e.currentTarget as any).style.display = 'none';
                                        }}
                                      />
                                    </div>
                                  </div>
                                </Link>
                              )}

                              {/* Products Grid - 5 Columns */}
                              <div className={`grid grid-cols-5 gap-8 px-12 py-8 ${isDark ? 'bg-[#15151D]/90' : 'bg-white/90'}`}>
                                {content.products?.map((product: any, idx: number) => (
                                  <div key={product.name} className={`${idx > 0 ? (isDark ? 'border-l border-[#29263A] pl-8' : 'border-l border-gray-200 pl-8') : ''}`}>
                                    {/* Product Header */}
                                    <div className="mb-4">
                                      <Link
                                        href={product.href}
                                        className="block group text-white"
                                        onClick={closeDropdown}
                                      >
                                        <div className="flex items-center space-x-2 mb-3">
                                          <div
                                            suppressHydrationWarning
                                            className="w-9 h-9 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-sm transition-all duration-200 group-hover:brightness-110"
                                            style={{ background: product.color || (isDark ? '#1A1829' : '#2563eb') }}
                                          >
                                            {React.createElement(product.icon, { className: "w-5 h-5" })}
                                          </div>
                                          {product.badge && (
                                            <span className={`px-2 py-0.5 text-[10px] font-semibold rounded ${isDark ? 'bg-[#8B5CF6]/20 text-[#A78BFA] border border-[#8B5CF6]/30' : 'bg-brand-yellow text-brand-dark-grey'}`}>
                                              {product.badge}
                                            </span>
                                          )}
                                        </div>
                                        <h3 className={`font-semibold text-sm mb-2 transition-colors duration-200 ${isDark ? 'text-white group-hover:text-[#A78BFA]' : 'text-gray-900 group-hover:text-brand-blue'}`}>
                                          {product.name}
                                        </h3>
                                        <p className={`text-xs leading-snug min-h-[32px] ${isDark ? 'text-[#B8B6C4]' : 'text-gray-600'}`}>
                                          {product.description}
                                        </p>
                                      </Link>
                                    </div>

                                    {/* Feature List */}
                                    <div className="space-y-2">
                                      {product.features?.map((feature: string) => (
                                        <div key={feature} className="flex items-start space-x-2 group cursor-pointer">
                                          <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 transition-colors duration-200 ${isDark ? 'bg-[#8B5CF6] group-hover:bg-[#A78BFA]' : 'bg-brand-blue group-hover:bg-brand-yellow'}`}></div>
                                          <span className={`text-xs leading-snug transition-colors duration-200 ${isDark ? 'text-[#B8B6C4] group-hover:text-white' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                            {feature}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeDropdown === item.name && content.layout !== 'mega-menu' && (
                      <div className={`absolute top-18 pt-2 z-50 ${isTwoColumn ? 'left-1/2 -translate-x-1/2 w-[560px]' : 'left-1/2 -translate-x-1/2 w-80'}`}>
                        <div className={`backdrop-blur-xl rounded-2xl overflow-hidden ${isDark
                          ? 'bg-[#15151D]/95 border border-[#29263A] shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                          : 'bg-white/95 border border-gray-100 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)]'
                          }`}>
                          {isTwoColumn ? (
                            <div className={`p-3 ${isDark ? 'bg-[#15151D]/90' : 'bg-white/90'}`}>
                              <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                  {content.leftItems?.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className={`dropdown-item flex items-center space-x-3 p-2.5 rounded-lg transition-all duration-200 group border border-transparent ${isDark
                                        ? 'hover:bg-[#1A1829] hover:border-[#29263A]'
                                        : 'hover:bg-gray-100/70 hover:border-gray-200'
                                        }`}
                                      onClick={closeDropdown}
                                    >
                                      <div suppressHydrationWarning className={"w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200 " + (subItem.color ? ("bg-gradient-to-br " + subItem.color) : (isDark ? "bg-[#1A1829]" : "bg-gray-200")) + " group-hover:brightness-110"}>
                                        {React.createElement(subItem.icon, { className: "w-4 h-4 text-white drop-shadow-sm" })}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                          <div className={`font-medium text-sm transition-colors duration-200 truncate ${isDark ? 'text-white group-hover:text-[#A78BFA]' : 'text-gray-800 group-hover:text-gray-900'}`}>
                                            {subItem.name}
                                          </div>
                                          {subItem.badge && (
                                            <span className={`px-2 py-0.5 text-xs font-medium rounded ${isDark ? 'bg-[#8B5CF6]/20 text-[#A78BFA]' : 'bg-gray-200 text-gray-800'}`}>
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className={`text-xs transition-colors duration-200 leading-relaxed ${isDark ? 'text-[#B8B6C4] group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}>
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                <div className={`space-y-1.5 pl-3 ${isDark ? 'border-l border-[#29263A]' : 'border-l border-gray-200'}`}>
                                  {content.rightItems?.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className={`dropdown-item flex items-center space-x-3 p-2.5 rounded-lg transition-all duration-200 group border border-transparent ${isDark
                                        ? 'hover:bg-[#1A1829] hover:border-[#29263A]'
                                        : 'hover:bg-gray-100/70 hover:border-gray-200'
                                        }`}
                                      onClick={closeDropdown}
                                    >
                                      <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200 group-hover:brightness-110 ${subItem.color ? `bg-gradient-to-br ${subItem.color}` : (isDark ? 'bg-[#8B5CF6]' : 'bg-brand-blue')}`}>
                                        {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                          <div className={`font-medium text-sm transition-colors duration-200 truncate ${isDark ? 'text-white group-hover:text-[#A78BFA]' : 'text-gray-800 group-hover:text-gray-900'}`}>
                                            {subItem.name}
                                          </div>
                                          {subItem.badge && (
                                            <span className={`px-2 py-0.5 text-xs font-medium rounded ${isDark ? 'bg-[#8B5CF6]/20 text-[#A78BFA]' : 'bg-gray-200 text-gray-800'}`}>
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className={`text-xs transition-colors duration-200 leading-relaxed ${isDark ? 'text-[#B8B6C4] group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}>
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={`p-3 ${isDark ? 'bg-[#15151D]/90' : 'bg-white/90'}`}>
                              <div className="space-y-1.5">
                                {content.items?.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`dropdown-item flex items-center space-x-3 p-2.5 rounded-lg transition-all duration-200 group border border-transparent ${isDark
                                      ? 'hover:bg-[#1A1829] hover:border-[#29263A]'
                                      : 'hover:bg-gray-100/70 hover:border-gray-200'
                                      }`}
                                    onClick={closeDropdown}
                                  >
                                    <div className={`w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200 group-hover:brightness-110 ${subItem.color ? `bg-gradient-to-br ${subItem.color}` : (isDark ? 'bg-[#8B5CF6]' : 'bg-brand-blue')}`}>
                                      {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-2">
                                        <div className={`font-medium text-sm transition-colors duration-200 truncate ${isDark ? 'text-white group-hover:text-[#A78BFA]' : 'text-gray-800 group-hover:text-gray-900'}`}>
                                          {subItem.name}
                                        </div>
                                        {subItem.badge && (
                                          <span className={`px-2 py-0.5 text-xs font-medium rounded ${isDark ? 'bg-[#8B5CF6]/20 text-[#A78BFA]' : 'bg-gray-200 text-gray-800'}`}>
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className={`text-xs transition-colors duration-200 leading-relaxed ${isDark ? 'text-[#B8B6C4] group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}>
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              )}
            </div>
          </div>

          {/* Right Side - CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className={`inline-block px-5 py-2 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${isDark
                  ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]'
                  : 'bg-brand-blue text-white hover:bg-brand-blue-dark shadow-md hover:shadow-lg'
                  }`}
              >
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="block lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-all duration-300 rounded-lg group z-50 relative backdrop-blur-sm shadow-sm ${isDark
                  ? 'text-white bg-[#15151D]/90 border border-[#29263A] hover:bg-[#1A1829]'
                  : 'text-gray-900 bg-white/60 border border-white/40 hover:bg-gray-100/80'
                  }`}
              >
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  {isOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`block lg:hidden shadow-2xl rounded-b-xl overflow-hidden backdrop-blur-xl ${isDark
            ? 'bg-[#15151D]/95 border-t border-[#29263A] text-white'
            : 'bg-white/95 border-t border-gray-200/50 text-gray-800'
            }`}>
            <div className="px-3 py-3 space-y-1">
              {navigationItems.map((item) => (
                <div className={isDark ? "text-gray-200" : "text-gray-800"} key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        className={`flex items-center justify-between w-full text-left p-3 rounded-lg transition-all duration-300 group ${activeDropdown === item.name
                          ? (isDark ? 'bg-[#8B5CF6] text-white shadow-md' : 'bg-brand-blue text-white shadow-md')
                          : (isDark ? 'hover:bg-[#1A1829] hover:text-white' : 'hover:bg-brand-blue-light hover:text-gray-900 hover:shadow-sm')
                          }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className={`transition-transform duration-200 flex items-center ${activeDropdown === item.name ? 'rotate-180' : ''}`}>
                          <ChevronDownIcon className="w-3 h-3" />
                        </span>
                      </button>

                      {activeDropdown === item.name && (
                        <div className="ml-3 space-y-1 overflow-hidden">
                          {/* Special handling for Products dropdown */}
                          {item.name === 'Products' && dropdownContent[item.name]?.products ? (
                            dropdownContent[item.name].products.map((product: any) => (
                              <Link
                                key={product.name}
                                href={product.href}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 group border ${isDark
                                  ? 'bg-[#15151D] hover:bg-[#1A1829] border-[#29263A]'
                                  : 'bg-white hover:bg-gray-50 border-gray-200'
                                  }`}
                                onClick={() => setTimeout(() => setIsOpen(false), 150)}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-[#8B5CF6]' : 'bg-brand-blue'}`}>
                                  {React.createElement(product.icon, { className: "w-4 h-4 text-white" })}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2">
                                    <span className={`font-semibold text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                      {product.name}
                                    </span>
                                    {product.badge && (
                                      <span className={`px-2 py-0.5 text-xs font-bold rounded flex-shrink-0 ${isDark ? 'bg-[#8B5CF6]/20 text-[#A78BFA]' : 'bg-brand-yellow text-brand-dark-grey'}`}>
                                        {product.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className={`text-xs leading-tight ${isDark ? 'text-[#B8B6C4]' : 'text-gray-600'}`}>
                                    {product.description}
                                  </p>
                                </div>
                              </Link>
                            ))
                          ) : (
                            /* Regular handling for other dropdowns */
                            (dropdownContent[item.name]?.items || (dropdownContent[item.name]?.leftItems || []).concat(dropdownContent[item.name]?.rightItems || [])).map((subItem: any) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 group border ${isDark
                                  ? 'bg-[#15151D] hover:bg-[#1A1829] border-[#29263A]'
                                  : 'bg-white hover:bg-gray-50 border-gray-200'
                                  }`}
                                onClick={() => setTimeout(() => setIsOpen(false), 150)}
                              >
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 ${isDark ? 'bg-[#8B5CF6]' : 'bg-brand-blue'}`}>
                                  {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className={`font-semibold text-sm truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                      {subItem.name}
                                    </span>
                                    {subItem.badge && (
                                      <span className={`px-2 py-0.5 text-xs font-bold rounded flex-shrink-0 ${isDark ? 'bg-[#8B5CF6]/20 text-[#A78BFA]' : 'bg-gray-200 text-gray-800'}`}>
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className={`text-xs leading-relaxed ${isDark ? 'text-[#B8B6C4]' : 'text-gray-600'}`}>
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2 px-3 rounded-lg transition-colors duration-200 ${isDark ? 'hover:bg-white/10 text-gray-100' : 'hover:bg-gray-600/40 text-gray-100'}`}
                      onClick={() => setTimeout(() => setIsOpen(false), 150)}
                    >
                      <span className="font-medium text-sm">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA */}
              <div className={`pt-3 mt-3 ${isDark ? 'border-t border-[#29263A]' : 'border-t border-gray-600'}`}>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-200 ${isDark
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                    }`}
                  onClick={() => setTimeout(() => setIsOpen(false), 150)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation