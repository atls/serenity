export const orderResultByKey = (keys, rows, key = 'id', defaultValue = undefined) => {
  const rowsByKey = rows.reduce(
    (result, row) => ({
      ...result,
      [row[key]]: row,
    }),
    {}
  )

  return keys.map((itemKey) => rowsByKey[itemKey] || defaultValue)
}
