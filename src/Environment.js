import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'

const store = new Store(new RecordSource()),
network = Network.create((operation, variables) =>
  fetch('https://api.graph.cool/relay/v1/cjfph4rrc1uhx0135aao4tpfg', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(res => res.json())
),
environment = new Environment({
  network,
  store,
})
export default environment
