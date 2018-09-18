# ESLint Configs for Glints [![npm version](https://badge.fury.io/js/%40glints%2Feslint-config.svg)](https://badge.fury.io/js/%40glints%2Feslint-config)

This repository contains shared rules for ESLint.

It is used across many of our internal and external projects.

# Usage Instructions

To integrate this into your project, install the package:

```
npm install --save-dev @glints/eslint-config  # If using npm
yarn add --dev @glints/eslint-config          # If using Yarn
```

Then add the following to your ESLint configuration:

```js
"extends": [
  "@glints/eslint-config",

  // Rules below are for projects that use React/JSX.
  "@glints/eslint-config/react",
  "@glints/eslint-config/jsx-control-statements"
]
```

# Contribution Guidelines

Refer to [this link](https://eslint.org/docs/developer-guide/shareable-configs) for documentation about sharable configurations and rules.

Before modifying the rules, please notify the codebase owners because it may impact many downstream projects.

We use [EditorConfig](https://editorconfig.org) to maintain consistent line-ending and indentation rules across all our projects. Ensure that you have the appropriate plugin installed in your preferred editor, or refer to `.editorconfig`.

# About Glints

Glints is an online talent recruitment and career discovery platform headquartered in Singapore. It is a platform for young talent to build up their career readiness through internships and graduate jobs; developing skill sets required in different careers.

**P.S.** We deal with quite a number of interesting engineering problems centered on matching the right talent to employers. Sounds interesting? Send your resume to tech@glints.com.
