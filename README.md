# lol-game-shared-config

[![CI](https://github.com/land-of-landless/lol-game-shared-config/actions/workflows/main.yml/badge.svg)](https://github.com/your-username/lol-game-shared-config/actions/workflows/main.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A central repository for shared configuration files used across various League of Legends game-related projects. This ensures consistency in code style, linting rules, and other development standards.

## 🚀 Getting Started

### issuing a new version

```bash
npx changeset
```

then

```bash
npm run local-release
```

### Installation

Add this package to your project as a development dependency.

**With npm:**

```bash
npm install --save-dev @land-of-landless/lol-game-shared-config
```

**With Yarn:**

```bash
yarn add --dev @land-of-landless/lol-game-shared-config
```

## Usage

After installation, you can extend the configurations in your project's respective configuration files.

### Example: ESLint

In your `.eslintrc.js` or `.eslintrc.json`:

```javascript
// .eslintrc.js
module.exports = {
  extends: '@land-of-landless/lol-game-shared-config/eslint',
  // Your project-specific rules and overrides go here
};
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
