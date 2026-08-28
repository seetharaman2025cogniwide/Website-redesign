import { createClient } from 'contentful';

// Check if Contentful is configured
const isContentfulConfigured = 
  process.env.CONTENTFUL_SPACE_ID && 
  process.env.CONTENTFUL_ACCESS_TOKEN;

// Contentful client configuration
const client = isContentfulConfigured ? createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
}) : null;

// Preview client for draft content
const previewClient = isContentfulConfigured && process.env.CONTENTFUL_PREVIEW_TOKEN ? createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  host: 'preview.contentful.com',
}) : null;

export { client, previewClient, isContentfulConfigured };