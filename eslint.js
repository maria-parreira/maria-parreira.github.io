module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Adiciona suporte para Prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'prettier', // Adiciona o plugin Prettier
  ],
  rules: {
    'prettier/prettier': 'error', // Garante que Prettier será aplicado
    'react/react-in-jsx-scope': 'off', // Se estiver usando React 17 ou superior
    'react/prop-types': 'off', // Se você não estiver usando prop-types
    'prefer-template': 'off', // Se você não quer usar template strings
    'linebreak-style': 0, // Ignora problemas de estilo de quebra de linha
    'no-console': 'warn', // Aviso para o uso de console.log
  },
};
