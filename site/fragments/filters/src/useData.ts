import { useQuery } from '@apollo/client' // eslint-disable-line import/no-extraneous-dependencies

import gql          from 'graphql-tag'

export const query = gql`
  query Categorys {
    categoryGroups {
      rows {
        id
        name
        children {
          id
          name
        }
      }
    }
  }
`

export const useData = () => {
  const { data } = useQuery(query)

  return data && data.categoryGroups ? data.categoryGroups.rows : []
}
