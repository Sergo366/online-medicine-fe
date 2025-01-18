import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    extends: [
      'next/core-web-vitals',
      'eslint:recommended',
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect', // Automatically detects the React version
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'on', // Disables the rule requiring React in scope
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
