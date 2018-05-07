import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime'
import {installRelayDevTools} from 'relay-devtools'

installRelayDevTools()

export default new Environment({
  network: Network.create((operation, variables) =>
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
    })
    .then(res => res.json())
    .catch(err => console.error(err))
  ),
  store: new Store(new RecordSource()),
})
