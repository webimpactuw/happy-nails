module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Add react recommendations
    'plugin:react/jsx-runtime', // For React 17+ and new JSX transform
  ],
  parser: '@babel/eslint-parser', // Specify the Babel parser
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
    ecmaVersion: 12, // Or a higher version like 2021, 2022
    sourceType: 'module',
    requireConfigFile: false, // Important for @babel/eslint-parser if not using babel.config.js
  },
  plugins: [
    'react',
  ],
  rules: {
    // Your custom rules here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};