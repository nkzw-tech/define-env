# define-env

## What is `@nkzw/define-env`?

`process.env.*` is not type-safe. It's easy to make a typo, or to forget setting an environment variable in a production environment. `@nkzw/define-env` is a tiny module that ensures all environment variables are defined on app startup, and provides a type-safe way to access them.

`@nkzw/define-env` saves time:

- **Type-safe:** Auto complete for environment variables. No more typos!
- **Required Variables:** All required environment variables must be present, otherwise the app will not start.
- **Immutable environment variables:** Environment variables are defined once on app startup, and cannot be changed during runtime.

## Installation

```bash
npm install @nkzw/define-env
```

## Usage

Create an `env.tsx` file in the root of your project listing all your env variables:

```typescript
import defineEnv from '@nkzw/define-env';

export default defineEnv([
  'DISCORD_KEY',
  'PUSH_KEY',
  'STRIPE_SERVER_KEY',
  'WEB_PUSH_PUBLIC_KEY',
  …
]);
```

Now, your can access your env variables anywhere in your project using `env('VARIABLE_NAME')`:

```typescript
import env from './env.tsx';

console.log(env('DISCORD_KEY'));

console.log(env('SUPER_SECRET_KEY')); // Type-error, because `SUPER_SECRET_KEY` is not defined in `env.tsx`.
```

You can also pass in your own object with environment variables:

```typescript
export default defineEnv(['APPLE_KEY'], {
  APPLE_KEY: 'AppleBananaKey',
});
```
