module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)']
};
