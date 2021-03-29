export function mapKeyToString<T extends string>(
    key: T,
    map: { [K in T]: string }
): string {
  if (!map[key]) {
    return key;
  }

  return map[key];
}

export function mapKeysToString<T extends string>(
    keys: T[],
    map: { [K in T]: string }
): string[] {
  return keys.map((item) => mapKeyToString(item, map));
}
