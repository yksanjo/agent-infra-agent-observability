# API Documentation

## Overview

A comprehensive observability platform for monitoring AI agent behavior, performance, and health. Provides metrics, logs, and traces in a unified dashboard.

## Key Features
- Distributed tracing for agent workflows
- Custom metrics dashboard
- Log aggregation from multiple agents
- Performance profiling and bottleneck detection
- Alert management with multiple channels
- Export to Prometheus, Grafana, DataDog

## Installation

```bash
npm install @yksanjo/agent-observability
```

## Quick Start

```javascript
import { AgentObservability } from '@yksanjo/agent-observability';

const client = new AgentObservability({
  apiKey: process.env.API_KEY,
});

await client.init();
const result = await client.process({ data: 'example' });
```

## Class: AgentObservability

### Constructor

```javascript
new AgentObservability(options)
```

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| timeout | number | 5000 | Request timeout in ms |
| retries | number | 3 | Number of retry attempts |
| debug | boolean | false | Enable debug logging |
| apiKey | string | - | API authentication key |

### Methods

#### init()

Initialize the client.

```javascript
await client.init();
```

#### process(data)

Process input data.

```javascript
const result = await client.process({
  data: 'your input data',
  // additional options
});
```

**Parameters:**
- `data` (Object): Input data object

**Returns:**
- `Promise<Object>`: Processing result

#### health()

Check client health status.

```javascript
const health = await client.health();
```

**Returns:**
- `Promise<Object>`: Health status object

## Configuration

| Environment Variable | Type | Default | Description |
|---------------------|------|---------|-------------|
| API_KEY | string | - | API authentication key |
| API_BASE_URL | string | http://localhost:3000 | Base URL |
| DEBUG | boolean | false | Enable debug mode |
| TIMEOUT | number | 5000 | Request timeout |
| LOG_LEVEL | string | info | Logging level |

## Examples

See the [examples](./examples) directory for more use cases.

## License

MIT - Yoshi Kondo
