import nx from '@nx/eslint-plugin'
import typescriptEslintParser from '@typescript-eslint/parser'
import airbnbConfig from 'eslint-config-airbnb'
import airbnbTypeScriptConfig from 'eslint-config-airbnb-typescript'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
      '**/node_modules',
      '**/libs/shared/ui/src/base/*',
      '**/libs/rStro/src/lib/NxRootStore/**/*',
    ],
  },
  {
    // Base configuration
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      prettier: prettier,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.base.json',
      },
    },
    settings: {
      ...airbnbConfig.settings,
      ...airbnbTypeScriptConfig.settings,
    },
    rules: {
      // NX rules
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
      // Custom rules from your eslintrc
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Add internal packages showing on top
            ['^@nx', '^react', '^\\w'],
            // Internal packages
            ['^@sas-mrts/store(/.*|$)'],
            ['^@sas-mrts/ui(/.*|$)'],
            ['^@sas-mrts/pages(/.*|$)'],
            ['^@components(/.*|$)'],
            ['^@lib(/.*|$)'],
            ['^@routes(/.*|$)'],
            ['^@layouts(/.*|$)'],
            ['^@utils(/.*|$)'],
            ['^@assets(/.*|$)'],
            ['^@helpers(/.*|$)'],
            ['^@hooks(/.*|$)'],
            ['^@providers(/.*|$)'],
            ['^@services(/.*|$)'],
            // Side effect imports
            ['^\\u0000'],
            // Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Other relative imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style imports
            ['^.+\\.?(css)$'],
          ],
        },
      ],
      'import/no-extraneous-dependencies': 'off',
      'import/no-named-as-default': 'off',
      'react/react-in-jsx-scope': 'off',
      'linebreak-style': 'error',
      'react/jsx-props-no-spreading': 'off',
      'no-console': 'error',
      'no-var': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          shorthandFirst: true,
        },
      ],
      '@typescript-eslint/no-floating-promises': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'spaced-comment': ['error', 'always'],
      eqeqeq: ['error', 'smart'],
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'react/require-default-props': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      'max-len': [
        'error',
        {
          code: 120,
        },
      ],
      'consistent-return': 'off',
      'array-callback-return': 'warn',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-loss-of-precision': 'off',
      'react/button-has-type': 'off',
      'no-plusplus': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-misused-promises': [
        2,
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'import'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['import'],
          next: ['import'],
        },
        {
          blankLine: 'never',
          prev: ['const', 'let'],
          next: ['const', 'let'],
        },
        {
          blankLine: 'always',
          prev: ['multiline-const', 'multiline-let'],
          next: ['*'],
        },
        {
          blankLine: 'always',
          prev: ['*'],
          next: ['multiline-const', 'multiline-let'],
        },
        {
          blankLine: 'always',
          prev: ['*'],
          next: ['if', 'switch', 'for', 'while', 'try', 'function', 'class'],
        },
        {
          blankLine: 'always',
          prev: ['if', 'switch', 'for', 'while', 'try', 'function', 'class'],
          next: ['*'],
        },
        {
          blankLine: 'never',
          prev: ['case'],
          next: ['case'],
        },
      ],
      'object-curly-spacing': [
        'error',
        'always',
        {
          objectsInObjects: true,
          arraysInObjects: true,
        },
      ],
      'array-bracket-spacing': [
        'error',
        'always',
        {
          objectsInArrays: true,
          arraysInArrays: false,
        },
      ],
    },
  },
  {
    // Test files override
    files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
    languageOptions: {
      globals: {
        jest: true,
      },
    },
    rules: {},
  },
]
