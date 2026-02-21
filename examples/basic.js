/**
 * Example usage of agent-observability
 * 
 * @example
 */

import { AgentObservability } from '../src/index.js';

async function main() {
  // Initialize the client
  const client = new AgentObservability({
    debug: true,
    timeout: 5000,
  });
  
  await client.init();
  
  // Process a request
  const result = await client.process({
    data: 'example data',
  });
  
  console.log('Result:', result);
  
  // Check health
  const health = await client.health();
  console.log('Health:', health);
}

main().catch(console.error);
