import { expect, test } from 'vitest';
import defineEnv from '../index.ts';

test('returns the correct environment variable', () => {
  const env = defineEnv(['NODE_ENV', 'API_KEY'], {
    API_KEY: '12345',
    NODE_ENV: 'test',
  });

  expect(env('NODE_ENV')).toBe('test');
  expect(env('API_KEY')).toBe('12345');
});

test('throws an error if an environment variable is missing', () => {
  expect(() =>
    defineEnv(['NODE_ENV', 'API_KEY'], {
      NODE_ENV: 'test',
    }),
  ).toThrowError(new Error("env: 'API_KEY' is missing."));
});

test('uses `process.env` by default', () => {
  process.env.NODE_ENV = 'test-environment';

  const env = defineEnv(['NODE_ENV']);
  expect(env('NODE_ENV')).toBe('test-environment');
});
