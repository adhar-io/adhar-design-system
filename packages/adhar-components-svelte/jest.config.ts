/* eslint-disable */
export default {
  displayName: 'adhar-components-svelte',
  preset: '../../jest.preset.js',
  transform: {
    '^(.+\\.svelte$)': [
      'svelte-jester',
      {
        preprocess: 'packages/adhar-components-svelte/svelte.config.cjs',
      },
    ],
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['svelte', 'ts', 'js', 'html'],
  coverageDirectory: '../../coverage/packages/adhar-components-svelte',
};
