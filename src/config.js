/**
 * Configuration for agent-observability
 * 
 * @module config
 */

export const config = {
  // Default timeout in milliseconds
  timeout: 5000,
  
  // Number of retry attempts
  retries: 3,
  
  // Debug mode
  debug: process.env.DEBUG === 'true',
  
  // API Configuration
  api: {
    baseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
    apiKey: process.env.API_KEY,
    version: 'v1',
  },
  
  // Feature Flags
  features: {
    logging: true,
    metrics: true,
    caching: false,
    rateLimiting: true,
  },
  
  // Rate Limiting
  rateLimit: {
    maxRequests: 100,
    windowMs: 60000,
  },
  
  // Cache Configuration
  cache: {
    enabled: false,
    ttl: 3600,
    maxSize: 1000,
  },
};

export default config;
