# Wild Horizons API

A JSON REST API serving a dataset of the planet's most interesting travel destinations, filterable by continent, country, and query parameters.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the server (runs on port 8000):

```bash
npm start
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api` | All destinations |
| GET | `/api?<key>=<value>` | Filter by query params |
| GET | `/api/continent/:name` | Filter by continent |
| GET | `/api/country/:name` | Filter by country |

### Examples

```bash
# All destinations
curl http://localhost:8000/api | jq '.'

# Filter by continent
curl http://localhost:8000/api/continent/africa | jq '.'

# Filter by country
curl http://localhost:8000/api/country/japan | jq '.'

# Filter by query param
curl "http://localhost:8000/api?type=beach" | jq '.'
```

## Development

Format code with Prettier:

```bash
npx prettier server.js --write
```

Lint with ESLint:

```bash
npx eslint server.js
```

## Project Setup Reference

```bash
npm init
npm install --save-dev prettier
npm init @eslint/config
```

## Related to
[nodejs](https://nodejs.org/en)
[npmjs](https://www.npmjs.com/)
[libraries](https://libraries.io/)
