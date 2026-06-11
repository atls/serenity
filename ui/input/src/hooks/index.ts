import { useAttach }     from './useAttach.js'
import { useMask }       from './useMask.js'
import { useOnChange }   from './useOnChange.js'
import { useOnKeyPress } from './useOnKeyPress.js'

const compose = (...items) =>
  (props) =>
    Object.assign({}, ...items.map((item) => item(props)))

export const useHooks = compose(useOnKeyPress, useOnChange, useAttach, useMask)
