# cosmoz-component

Template for creating Neovici public web components using pionjs and lit-html.

## Installation

```bash
npm install
```

## Available Scripts

- `npm run lint` - Run ESLint and TypeScript type checking
- `npm run build` - Build TypeScript to dist/
- `npm run test` - Run tests with coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run storybook:start` - Start Storybook development server
- `npm run storybook:build` - Build static Storybook

## Usage

Import the component:

```javascript
import '@neovici/cosmoz-component';

// Use in HTML
<cosmoz-component greeting="Hi"></cosmoz-component>
```

## Development

1. Clone the repository
2. Run `npm install`
3. Start development with `npm run storybook:start`
4. Make changes and verify with tests

## Publishing

This package uses Semantic Release for automated versioning and publishing. Commits are analyzed and releases are created automatically based on Conventional Commits.
