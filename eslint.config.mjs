// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {
    // Apply to all JavaScript/JSX files
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser, // Use Babel parser for all JS/JSX files
      parserOptions: {
        requireConfigFile: false, // Don't require a separate babel.config.js if you don't have one
        babelOptions: {
          presets: ["@babel/preset-react"], // Ensure React preset is used for JSX transformation
        },
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
        ecmaVersion: "latest", // Use the latest ECMAScript version
        sourceType: "module", // Enable ES modules
      },
      globals: {
        ...globals.browser, // Add browser global variables (e.g., window, document)
        ...globals.node,    // Add Node.js global variables (e.g., process, require)
      },
    },
    plugins: {
      react: react, // Register the react plugin
    },
    rules: {
      ...js.configs.recommended.rules, // Apply ESLint's recommended rules
      ...react.configs.recommended.rules, // Apply React's recommended rules
      ...react.configs["jsx-runtime"].rules, // Apply rules for the new JSX transform (React 17+)


      // Custom rules (optional)
      // 'react/react-in-jsx-scope': 'off', // Turn off if using React 17+ new JSX transform
      // 'react/prop-types': 'off', // Turn off if using TypeScript or not using prop-types
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  // You can add more configurations here for specific directories or file types
  // For example, if you have a 'tests' folder and want different rules:
  // {
  //   files: ["tests/**/*.js"],
  //   rules: {
  //     "no-unused-expressions": "off"
  //   }
  // }
];