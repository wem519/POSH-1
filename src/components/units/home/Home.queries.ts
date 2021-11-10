import { gql } from "@apollo/client"

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search:String){
    fetchUseditems(search:$search){
      name
      images
    }
  }
`