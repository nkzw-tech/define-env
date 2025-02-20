export default function defineEnv<
  T extends string,
  TArray extends ReadonlyArray<T>,
  EnvKey extends TArray[number],
>(keys: TArray): (key: EnvKey) => string {
  type Env = Record<T, string>;

  const data: Partial<Env> = {};

  for (const key of keys) {
    const value = process.env[key];
    if (!value) {
      throw new Error(`env: '${key}' is missing.`);
    }

    data[key] = value;
  }

  return (key) => (data as Env)[key];
}
