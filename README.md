# 📊 agent-infra-agent-observability

[![Go](https://img.shields.io/badge/Go-1.20+-blue.svg)](https://go.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Go Report Card](https://goreportcard.com/badge/github.com/yksanjo/agent-infra-agent-observability)](https://goreportcard.com/report/github.com/yksanjo/agent-infra-agent-observability)

## Description

A comprehensive observability platform for monitoring AI agent behavior, performance, and health. Provides metrics, logs, and traces in a unified dashboard.

## Key Features
- Distributed tracing for agent workflows
- Custom metrics dashboard
- Log aggregation from multiple agents
- Performance profiling and bottleneck detection
- Alert management with multiple channels
- Export to Prometheus, Grafana, DataDog

## Features

- Distributed tracing for multi-agent workflows
- Custom metrics dashboard with real-time updates
- Centralized log aggregation
- Performance profiling and bottleneck detection
- Alert management with Slack, PagerDuty, email integrations
- Export metrics to Prometheus, Grafana, DataDog
- Custom metric definitions per agent
- Historical data retention and analysis

## Installation

```bash
# Clone the repository
git clone https://github.com/yksanjo/agent-infra-agent-observability.git
cd agent-infra-agent-observability

# Install dependencies
go mod download
```

## Usage

### Basic Usage

```javascript
import { AgentObservability } from './src/index.js';

async function main() {
  // Initialize
  const client = new AgentObservability({
    timeout: 5000,
    debug: true,
  });
  
  await client.init();
  
  // Process a request
  const result = await client.process({
    data: 'your data here',
  });
  
  console.log('Result:', result);
}

main().catch(console.error);
```

### With Configuration

```javascript
import { AgentObservability } from './src/index.js';

const client = new AgentObservability({
  timeout: 10000,
  retries: 5,
  features: {
    caching: true,
    metrics: true,
  },
});

await client.init();
```

## API Reference

See [API.md](./API.md) for detailed API documentation.

## Configuration

Create a `.env` file or use environment variables:

```bash
# Required
API_KEY=your_api_key

# Optional
DEBUG=false
TIMEOUT=5000
LOG_LEVEL=info
API_BASE_URL=http://localhost:3000
```

## Architecture

```
┌─────────────────────────────────────────┐
│            agent-observability               │
├─────────────────────────────────────────┤
│  ┌───────────┐  ┌───────────┐           │
│  │  Input   │  │  Output  │           │
│  │ Handler  │  │ Handler  │           │
│  └───────────┘  └───────────┘           │
│         │              │                │
│  ┌─────────────────────────────────┐   │
│  │       Core Processing           │   │
│  └─────────────────────────────────┘   │
│         │              │                │
│  ┌───────────┐  ┌───────────┐           │
│  │  Storage  │  │  Network  │           │
│  └───────────┘  └───────────┘           │
└─────────────────────────────────────────┘
```

## Development

```bash
# Run tests
npm test

# Run in development mode
npm run dev

# Build (for TypeScript)
npm run build
```

## Contributing

We welcome contributions! Please see our [contributing guidelines](./CONTRIBUTING.md).

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - Copyright (c) 2026 Yoshi Kondo

---

<p align="center">
  Built with 🔥 by <a href="https://github.com/yksanjo">Yoshi Kondo</a>
</p>
