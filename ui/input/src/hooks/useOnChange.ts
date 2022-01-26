export const useOnChange = ({ onChange }) => {
  if (!onChange) {
    return {}
  }

  return {
    onChange: ({ target }) => onChange(target.value),
  }
}
