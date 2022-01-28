import { useQuery } from '@apollo/client'

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
