# lol-game-shared-config

[![CI](https://github.com/land-of-landless/lol-game-shared-config/actions/workflows/ci.yml/badge.svg)](https://github.com/land-of-landless/lol-game-shared-config/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A central repository for shared configuration files used across various land of landless game-related projects. This ensures consistency in code style, and other development standards.

## 🚀 Getting Started

### issuing a new version

To issue a new version of the shared configuration, you can use the Changesets tool. This tool helps manage versioning and changelogs in a straightforward way.

```bash
npx changeset
```

for just applying the version bump:

```bash
npx changeset version
```

for versioning and publishing the package, you can use the following command:

```bash
npm run local-release
```

### Installation

Add this package to your project as a dependency.

**With npm:**

```bash
npm install --save @land-of-landless/lol-game-shared-config
```

**With Yarn:**

```bash
yarn add @land-of-landless/lol-game-shared-config
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
