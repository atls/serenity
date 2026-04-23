import { GetServerSideProps } from 'next'

const buildSearch = (query: Record<string, string | string[]>) => {
  const search = new URLSearchParams()
  const hasReturnTo = typeof query.return_to !== 'undefined'

  if (!hasReturnTo && typeof query.continue !== 'undefined') {
    const value = query.continue

    if (Array.isArray(value)) {
      value.forEach((item) => search.append('return_to', item))
    } else {
      search.append('return_to', value)
    }
  }

  Object.entries(query).forEach(([key, value]) => {
    if (key === 'continue') {
      return
    }

    if (Array.isArray(value)) {
      value.forEach((item) => search.append(key, item))
      return
    }

    search.append(key, value)
  })

  const result = search.toString()

  return result ? `?${result}` : ''
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => ({
  redirect: {
    destination: `/auth/registration${buildSearch(query as Record<string, string | string[]>)}`,
    permanent: false,
  },
})

export default () => null
