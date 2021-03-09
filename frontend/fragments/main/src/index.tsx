import React, { useCallback } from 'react'
import { useRouter }          from 'next/router'
import { useIntl }            from 'react-intl'

import { Main }               from './Main'
import { useData }            from './useData'

export default () => {
  const intl = useIntl()
  const data = useData()
  const router = useRouter()

  const onSelectOption = useCallback(value => {
    router.push(value ? `/specialists?catId=${value}` : '/specialists')
  }, [])

  const onSelectValue = useCallback(value => {
    router.push(value ? `/specialists?q=${value}` : '/specialists')
  }, [])

  return (
    <Main intl={intl} data={data} onSelectOption={onSelectOption} onSelectValue={onSelectValue} />
  )
}
