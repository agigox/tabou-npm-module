# Contributing to tabou-npm-module

Thank you for considering contributing to this project! Here are some guidelines to help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `npm install`
3. Make your changes in the `src/` directory
4. Build the project: `npm run build`
5. Run tests: `npm test`

## Development Workflow

- **Development mode**: `npm run dev` (watches for changes and rebuilds automatically)
- **Build**: `npm run build` (compiles TypeScript to JavaScript)
- **Test**: `npm test` (runs the test suite)
- **Clean**: `npm run clean` (removes build artifacts)

## Code Style

- Use TypeScript for all new code
- Include JSDoc comments for public APIs
- Follow existing code formatting

## Testing

- Add tests for any new functionality
- Ensure all tests pass before submitting a PR
- Tests are located in `test.js` and test the built JavaScript output

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Ensure tests pass and code builds successfully
4. Submit a pull request with a clear description of changes

## CI/CD

This project uses GitHub Actions for continuous integration. The CI pipeline will:

- Test on multiple Node.js versions (18.x, 20.x, 22.x)
- Build the TypeScript code
- Run the test suite
- Verify the package can be published

All checks must pass before a PR can be merged.
