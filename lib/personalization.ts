// Content personalization engine with privacy compliance

export interface UserProfile {
  id: string;
  industry?: string;
  company?: string;
  role?: string;
  interests: string[];
  visitedPages: string[];
  engagementScore: number;
  lastVisit: Date;
  sessionCount: number;
  preferredContentTypes: string[];
  location?: {
    country: string;
    region: string;
  };
}

export interface PersonalizationRule {
  id: string;
  name: string;
  conditions: PersonalizationCondition[];
  actions: PersonalizationAction[];
  priority: number;
  active: boolean;
}

export interface PersonalizationCondition {
  type: 'industry' | 'role' | 'engagement' | 'page_visits' | 'location' | 'session_count';
  operator: 'equals' | 'contains' | 'greater_than' | 'less_than' | 'in';
  value: any;
}

export interface PersonalizationAction {
  type: 'show_content' | 'hide_content' | 'replace_content' | 'reorder_content' | 'highlight_content';
  target: string;
  content?: any;
  weight?: number;
}

export interface ContentRecommendation {
  id: string;
  type: 'product' | 'service' | 'case_study' | 'blog_post' | 'resource';
  title: string;
  description: string;
  url: string;
  score: number;
  reason: string;
  metadata?: any;
}

// Privacy-compliant user tracking
export class PersonalizationEngine {
  private static instance: PersonalizationEngine;
  private userProfiles: Map<string, UserProfile> = new Map();
  private rules: PersonalizationRule[] = [];
  private consentGiven: boolean = false;

  static getInstance(): PersonalizationEngine {
    if (!PersonalizationEngine.instance) {
      PersonalizationEngine.instance = new PersonalizationEngine();
    }
    return PersonalizationEngine.instance;
  }

  // Initialize with user consent
  initialize(hasConsent: boolean = false): void {
    this.consentGiven = hasConsent;
    if (hasConsent) {
      this.loadUserProfile();
      this.loadPersonalizationRules();
    }
  }

  // Get or create user profile
  getUserProfile(userId: string): UserProfile {
    if (!this.consentGiven) {
      return this.getAnonymousProfile();
    }

    let profile = this.userProfiles.get(userId);
    if (!profile) {
      profile = {
        id: userId,
        interests: [],
        visitedPages: [],
        engagementScore: 0,
        lastVisit: new Date(),
        sessionCount: 1,
        preferredContentTypes: [],
      };
      this.userProfiles.set(userId, profile);
    }
    return profile;
  }

  // Anonymous profile for non-consented users
  private getAnonymousProfile(): UserProfile {
    return {
      id: 'anonymous',
      interests: [],
      visitedPages: [],
      engagementScore: 0,
      lastVisit: new Date(),
      sessionCount: 1,
      preferredContentTypes: [],
    };
  }

  // Track user behavior
  trackPageVisit(userId: string, page: string, duration?: number): void {
    if (!this.consentGiven) return;

    const profile = this.getUserProfile(userId);
    profile.visitedPages.push(page);
    profile.lastVisit = new Date();

    if (duration) {
      profile.engagementScore += this.calculateEngagementScore(duration);
    }

    // Infer interests from page visits
    this.updateInterests(profile, page);

    // Save profile
    this.saveUserProfile(profile);
  }

  // Track user interactions
  trackInteraction(userId: string, interaction: {
    type: 'click' | 'download' | 'form_submit' | 'demo_request';
    target: string;
    metadata?: any;
  }): void {
    if (!this.consentGiven) return;

    const profile = this.getUserProfile(userId);

    // Increase engagement score based on interaction type
    const scoreMap = {
      click: 1,
      download: 5,
      form_submit: 10,
      demo_request: 20,
    };

    profile.engagementScore += scoreMap[interaction.type] || 1;

    // Update interests based on interaction
    if (interaction.metadata?.category) {
      this.addInterest(profile, interaction.metadata.category);
    }

    this.saveUserProfile(profile);
  }

  // Get personalized content recommendations
  getContentRecommendations(userId: string, contentType?: string, limit: number = 5): ContentRecommendation[] {
    const profile = this.getUserProfile(userId);
    const recommendations: ContentRecommendation[] = [];

    // Industry-specific recommendations
    if (profile.industry) {
      recommendations.push(...this.getIndustryRecommendations(profile.industry, limit));
    }

    // Interest-based recommendations
    profile.interests.forEach(interest => {
      recommendations.push(...this.getInterestRecommendations(interest, limit));
    });

    // Engagement-based recommendations
    if (profile.engagementScore > 50) {
      recommendations.push(...this.getHighEngagementRecommendations(limit));
    }

    // Remove duplicates and sort by score
    const uniqueRecommendations = recommendations
      .filter((rec, index, self) => self.findIndex(r => r.id === rec.id) === index)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return uniqueRecommendations;
  }

  // Apply personalization rules to content
  personalizeContent(userId: string, content: any[]): any[] {
    if (!this.consentGiven) return content;

    const profile = this.getUserProfile(userId);
    let personalizedContent = [...content];

    // Apply each rule
    this.rules
      .filter(rule => rule.active)
      .sort((a, b) => b.priority - a.priority)
      .forEach(rule => {
        if (this.evaluateConditions(rule.conditions, profile)) {
          personalizedContent = this.applyActions(rule.actions, personalizedContent, profile);
        }
      });

    return personalizedContent;
  }

  // Progressive profiling - gradually collect user information
  updateProfile(userId: string, updates: Partial<UserProfile>): void {
    if (!this.consentGiven) return;

    const profile = this.getUserProfile(userId);
    Object.assign(profile, updates);
    this.saveUserProfile(profile);
  }

  // Industry-specific content filtering
  getIndustryContent(industry: string, contentType?: string): any[] {
    const industryContentMap: Record<string, any[]> = {
      banking: [
        { id: 'banking-compliance', type: 'case_study', title: 'Banking Compliance Automation', score: 90 },
        { id: 'fraud-detection', type: 'product', title: 'AI Fraud Detection', score: 85 },
      ],
      healthcare: [
        { id: 'clinical-docs', type: 'case_study', title: 'Clinical Documentation AI', score: 90 },
        { id: 'patient-care', type: 'service', title: 'Patient Care Coordination', score: 85 },
      ],
      retail: [
        { id: 'personalization', type: 'product', title: 'Retail Personalization Engine', score: 90 },
        { id: 'inventory-opt', type: 'case_study', title: 'Inventory Optimization', score: 85 },
      ],
      // Add more industries...
    };

    return industryContentMap[industry] || [];
  }

  // Privacy compliance methods
  exportUserData(userId: string): UserProfile | null {
    if (!this.consentGiven) return null;
    return this.userProfiles.get(userId) || null;
  }

  deleteUserData(userId: string): boolean {
    return this.userProfiles.delete(userId);
  }

  // Private helper methods
  private calculateEngagementScore(duration: number): number {
    // Score based on time spent (in seconds)
    if (duration < 10) return 1;
    if (duration < 30) return 2;
    if (duration < 60) return 3;
    if (duration < 180) return 5;
    return 10;
  }

  private updateInterests(profile: UserProfile, page: string): void {
    // Extract interests from page URL
    const pageInterests = this.extractInterestsFromPage(page);
    pageInterests.forEach(interest => {
      this.addInterest(profile, interest);
    });
  }

  private addInterest(profile: UserProfile, interest: string): void {
    if (!profile.interests.includes(interest)) {
      profile.interests.push(interest);
    }
  }

  private extractInterestsFromPage(page: string): string[] {
    const interests: string[] = [];

    if (page.includes('/products/')) {
      if (page.includes('cogniassist')) interests.push('agentic-ai');
      if (page.includes('cogniloom')) interests.push('kubernetes-orchestration');
      if (page.includes('cogniaura')) interests.push('analytics-bi');
      if (page.includes('cogninova')) interests.push('education-erp');
      if (page.includes('cogniforge')) interests.push('manufacturing-erp');
    }

    if (page.includes('/industries/')) {
      const industry = page.split('/industries/')[1]?.split('/')[0];
      if (industry) interests.push(industry);
    }

    if (page.includes('/services/')) interests.push('services');
    if (page.includes('/blog/')) interests.push('content');

    return interests;
  }

  private getIndustryRecommendations(industry: string, limit: number): ContentRecommendation[] {
    const content = this.getIndustryContent(industry);
    return content.slice(0, limit).map(item => ({
      ...item,
      reason: `Recommended for ${industry} industry`,
      url: `/${item.type}s/${item.id}`,
    }));
  }

  private getInterestRecommendations(interest: string, limit: number): ContentRecommendation[] {
    // Mock recommendations based on interests
    const interestContent: Record<string, ContentRecommendation[]> = {
      'conversational-ai': [
        {
          id: 'chatbot-guide',
          type: 'resource',
          title: 'Enterprise Chatbot Implementation Guide',
          description: 'Complete guide to implementing conversational AI',
          url: '/resources/chatbot-guide',
          score: 80,
          reason: 'Based on your interest in conversational AI',
        },
      ],
      'agentic-ai': [
        {
          id: 'agent-orchestration',
          type: 'blog_post',
          title: 'The Future of AI Agent Orchestration',
          description: 'How agentic AI is transforming enterprise operations',
          url: '/blog/agent-orchestration',
          score: 85,
          reason: 'Based on your interest in agentic AI',
        },
      ],
      // Add more interest-based content...
    };

    return interestContent[interest]?.slice(0, limit) || [];
  }

  private getHighEngagementRecommendations(limit: number): ContentRecommendation[] {
    return [
      {
        id: 'enterprise-demo',
        type: 'product' as const,
        title: 'Schedule Enterprise Demo',
        description: 'Get a personalized demo of our AI platform',
        url: '/',
        score: 95,
        reason: 'High engagement user - ready for demo',
      },
    ].slice(0, limit);
  }

  private evaluateConditions(conditions: PersonalizationCondition[], profile: UserProfile): boolean {
    return conditions.every(condition => {
      switch (condition.type) {
        case 'industry':
          return condition.operator === 'equals' ? profile.industry === condition.value : false;
        case 'engagement':
          return condition.operator === 'greater_than' ? profile.engagementScore > condition.value : false;
        case 'session_count':
          return condition.operator === 'greater_than' ? profile.sessionCount > condition.value : false;
        default:
          return false;
      }
    });
  }

  private applyActions(actions: PersonalizationAction[], content: any[], profile: UserProfile): any[] {
    let result = [...content];

    actions.forEach(action => {
      switch (action.type) {
        case 'show_content':
          // Add content if not already present
          if (action.content && !result.find(item => item.id === action.content.id)) {
            result.push(action.content);
          }
          break;
        case 'reorder_content':
          // Reorder based on personalization score
          result.sort((a, b) => (b.personalizationScore || 0) - (a.personalizationScore || 0));
          break;
        // Add more action types...
      }
    });

    return result;
  }

  private loadUserProfile(): void {
    // Load from localStorage or API
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('userProfile');
      if (stored) {
        try {
          const profile = JSON.parse(stored);
          this.userProfiles.set(profile.id, profile);
        } catch (error) {
          console.error('Error loading user profile:', error);
        }
      }
    }
  }

  private saveUserProfile(profile: UserProfile): void {
    // Save to localStorage or API
    if (typeof window !== 'undefined') {
      localStorage.setItem('userProfile', JSON.stringify(profile));
    }
  }

  private loadPersonalizationRules(): void {
    // Load default rules
    this.rules = [
      {
        id: 'high-engagement-demo',
        name: 'Show demo CTA for high engagement users',
        conditions: [
          { type: 'engagement', operator: 'greater_than', value: 50 }
        ],
        actions: [
          { type: 'show_content', target: 'demo-cta', content: { type: 'cta', message: 'Ready for a demo?' } }
        ],
        priority: 10,
        active: true,
      },
      {
        id: 'industry-specific-content',
        name: 'Show industry-specific content',
        conditions: [
          { type: 'industry', operator: 'equals', value: 'banking' }
        ],
        actions: [
          { type: 'show_content', target: 'industry-content', content: { type: 'case_study', industry: 'banking' } }
        ],
        priority: 5,
        active: true,
      },
    ];
  }
}