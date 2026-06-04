import { GetServerSideProps } from 'next'

const buildSearch = (query: Record<string, string | string[]>) => {
  const search = new URLSearchParams()

  Object.entries(query).forEach(([key, value]) => {
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
    destination: `/auth/login${buildSearch(query as Record<string, string | string[]>)}`,
    permanent: false,
  },
})

export default () => null
