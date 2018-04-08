import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default (ctx) => {
  const link = new HttpLink({ uri: 'https://api.graphcms.com/simple/v1/cjf6sh06n2m8q0113fo1pzjr0' })
  return {
    link,
    cache: new InMemoryCache()
  }
}
