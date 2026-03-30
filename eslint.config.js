import globals from 'globals';
import pluginJs from '@eslint/js';
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    rules: {
      'no-console': 'warn', 
      'no-unused-vars': 'warn',    
      'semi': ['error', 'always'], 
      'quotes': ['error', 'single'] 
    }
  },
  pluginJs.configs.recommended,
];