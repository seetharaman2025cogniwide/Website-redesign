'use client';

import { useState, useEffect } from 'react';
import { performanceTester, PerformanceResult, PerformanceAuditor } from '@/lib/performance-testing';

export function PerformanceDashboard() {
  const [results, setResults] = useState<PerformanceResult[]>([]);
  const [auditResults, setAuditResults] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'metrics' | 'audit' | 'cache'>('metrics');

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    // Update results periodically
    const updateResults = () => {
      if (performanceTester) {
        setResults(performanceTester.getResults());
      }
    };

    updateResults();
    const interval = setInterval(updateResults, 5000);

    // Keyboard shortcut to toggle dashboard
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const runAudit = async () => {
    const auditor = PerformanceAuditor.getInstance();
    const results = await auditor.auditPage();
    setAuditResults(results);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getResultColor = (passed: boolean) => {
    return passed ? 'text-green-400' : 'text-red-400';
  };

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return null;
  }

  const score = performanceTester?.getPerformanceScore() || 0;
  const failedTests = results.filter(r => !r.passed);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-lg shadow-xl z-50 w-96 max-h-96 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          <h3 className="font-semibold">Performance Dashboard</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`text-sm font-mono ${getScoreColor(score)}`}>
            {score}/100
          </span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-700">
        {['metrics', 'audit', 'cache'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`flex-1 py-2 px-3 text-xs font-medium capitalize transition-colors ${
              activeTab === tab
                ? 'bg-gray-700 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-4 max-h-64 overflow-y-auto text-xs">
        {activeTab === 'metrics' && (
          <div className="space-y-2">
            {results.length === 0 ? (
              <div className="text-gray-400 text-center py-4">
                Running performance tests...
              </div>
            ) : (
              <>
                {failedTests.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-red-400 font-semibold mb-2">
                      Failed Tests ({failedTests.length})
                    </h4>
                    {failedTests.map((result, index) => (
                      <div key={index} className="flex justify-between items-center py-1">
                        <span className="text-red-400">
                          {result.test.description}
                        </span>
                        <span className="font-mono">
                          {result.value}{result.test.unit} &gt; {result.test.threshold}{result.test.unit}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                
                <h4 className="font-semibold mb-2">All Results</h4>
                {results.map((result, index) => (
                  <div key={index} className="flex justify-between items-center py-1">
                    <span className={getResultColor(result.passed)}>
                      {result.test.description}
                    </span>
                    <span className="font-mono">
                      {result.value}{result.test.unit}
                    </span>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {activeTab === 'audit' && (
          <div className="space-y-3">
            <button
              onClick={runAudit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-xs transition-colors"
            >
              Run Performance Audit
            </button>
            
            {auditResults && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Audit Score:</span>
                  <span className={`font-mono ${getScoreColor(auditResults.score)}`}>
                    {auditResults.score}/100
                  </span>
                </div>
                
                {auditResults.opportunities.length > 0 && (
                  <div>
                    <h5 className="text-yellow-400 font-semibold mb-1">Opportunities</h5>
                    {auditResults.opportunities.map((opp: string, index: number) => (
                      <div key={index} className="text-yellow-300 text-xs py-1">
                        • {opp}
                      </div>
                    ))}
                  </div>
                )}
                
                {auditResults.diagnostics.length > 0 && (
                  <div>
                    <h5 className="text-blue-400 font-semibold mb-1">Diagnostics</h5>
                    {auditResults.diagnostics.map((diag: string, index: number) => (
                      <div key={index} className="text-blue-300 text-xs py-1">
                        • {diag}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'cache' && (
          <div className="space-y-2">
            <div className="text-gray-400 text-center py-4">
              Cache statistics will appear here
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-gray-700 text-xs text-gray-400">
        Ctrl+Shift+D to toggle • Updates every 5s
      </div>
    </div>
  );
}

// Performance metrics widget for production
export function PerformanceWidget() {
  const [metrics, setMetrics] = useState<Record<string, number>>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('show-perf-widget')) {
      return;
    }

    const updateMetrics = () => {
      if (performanceTester) {
        const results = performanceTester.getResults();
        const metricsMap: Record<string, number> = {};
        
        results.forEach(result => {
          metricsMap[result.test.name] = result.value;
        });
        
        setMetrics(metricsMap);
      }
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 10000);

    // Show widget on triple-click
    let clickCount = 0;
    const handleClick = () => {
      clickCount++;
      if (clickCount === 3) {
        setIsVisible(true);
        clickCount = 0;
      }
      setTimeout(() => { clickCount = 0; }, 1000);
    };

    document.addEventListener('click', handleClick);

    return () => {
      clearInterval(interval);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  if (!isVisible || Object.keys(metrics).length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-3 rounded-lg text-xs font-mono z-40 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold">Performance</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {Object.entries(metrics).slice(0, 5).map(([key, value]) => (
          <div key={key} className="flex justify-between">
            <span className="text-gray-300">{key}:</span>
            <span>{typeof value === 'number' ? value.toFixed(0) : value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}