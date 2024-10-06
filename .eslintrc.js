module.exports = {
 parser: '@typescript-eslint/parser', // Use TypeScript parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing if you're working with React
    },
  },
  files: ["./app/[lang]/(landings)/**/*.ts", "./app/[lang]/(landings)/**/*.tsx"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};
