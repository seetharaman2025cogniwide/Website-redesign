'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { PersonalizationEngine, UserProfile, ContentRecommendation } from '@/lib/personalization';

interface PersonalizationContextType {
  userProfile: UserProfile | null;
  recommendations: ContentRecommendation[];
  hasConsent: boolean;
  trackPageVisit: (page: string, duration?: number) => void;
  trackInteraction: (interaction: any) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  giveConsent: () => void;
  revokeConsent: () => void;
  personalizeContent: (content: any[]) => any[];
  getIndustryContent: (industry: string) => any[];
}

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined);

interface PersonalizationProviderProps {
  children: ReactNode;
}

export function PersonalizationProvider({ children }: PersonalizationProviderProps) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<ContentRecommendation[]>([]);
  const [hasConsent, setHasConsent] = useState(false);
  const [engine] = useState(() => PersonalizationEngine.getInstance());
  const [userId] = useState(() => {
    // Generate or retrieve user ID
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('userId');
      if (!id) {
        id = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem('userId', id);
      }
      return id;
    }
    return 'anonymous';
  });

  useEffect(() => {
    // Check for existing consent
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('personalizationConsent');
      const consentGiven = consent === 'true';
      setHasConsent(consentGiven);
      
      // Initialize engine
      engine.initialize(consentGiven);
      
      if (consentGiven) {
        const profile = engine.getUserProfile(userId);
        setUserProfile(profile);
        updateRecommendations();
      }
    }
  }, [engine, userId]);

  const updateRecommendations = () => {
    const recs = engine.getContentRecommendations(userId, undefined, 10);
    setRecommendations(recs);
  };

  const trackPageVisit = (page: string, duration?: number) => {
    engine.trackPageVisit(userId, page, duration);
    if (hasConsent) {
      const profile = engine.getUserProfile(userId);
      setUserProfile(profile);
      updateRecommendations();
    }
  };

  const trackInteraction = (interaction: any) => {
    engine.trackInteraction(userId, interaction);
    if (hasConsent) {
      const profile = engine.getUserProfile(userId);
      setUserProfile(profile);
      updateRecommendations();
    }
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    engine.updateProfile(userId, updates);
    if (hasConsent) {
      const profile = engine.getUserProfile(userId);
      setUserProfile(profile);
      updateRecommendations();
    }
  };

  const giveConsent = () => {
    setHasConsent(true);
    localStorage.setItem('personalizationConsent', 'true');
    engine.initialize(true);
    
    const profile = engine.getUserProfile(userId);
    setUserProfile(profile);
    updateRecommendations();
  };

  const revokeConsent = () => {
    setHasConsent(false);
    localStorage.setItem('personalizationConsent', 'false');
    engine.deleteUserData(userId);
    setUserProfile(null);
    setRecommendations([]);
  };

  const personalizeContent = (content: any[]) => {
    return engine.personalizeContent(userId, content);
  };

  const getIndustryContent = (industry: string) => {
    return engine.getIndustryContent(industry);
  };

  const value: PersonalizationContextType = {
    userProfile,
    recommendations,
    hasConsent,
    trackPageVisit,
    trackInteraction,
    updateProfile,
    giveConsent,
    revokeConsent,
    personalizeContent,
    getIndustryContent,
  };

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  const context = useContext(PersonalizationContext);
  if (context === undefined) {
    throw new Error('usePersonalization must be used within a PersonalizationProvider');
  }
  return context;
}