# define-env

## What is `@nkzw/define-env`?

`process.env.*` is not type-safe. It's easy to make a typo, or to forget setting an environment variable in a production environment. `@nkzw/define-env` is a tiny module that ensures all environment variables are defined on app startup, and provides a type-safe way to access them.

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

Then, import this module at the top of your main `index.ts` file:

```typescript
import './env.tsx';
// Your other imports and code goes here:
import { createServer } from 'node:http';

createServer((req, res) => {
  res.end('Hello, world!');
}).listen(3000);
```

Now, your can access your env variables anywhere in your project using `env('VARIABLE_NAME')`:

```typescript
import env from './env.tsx';

console.log(env('DISCORD_KEY'));

console.log(env('SUPER_SECRET_KEY')); // Type-error, because `SUPER_SECRET_KEY` is not defined in `env.tsx`.
```
