const fetch = require('node-fetch'),
fs = require('fs'),

{
  buildClientSchema,
  introspectionQuery,
  printSchema,
} = require('graphql/utilities')

console.log(introspectionQuery)

fetch('https://api.graph.cool/relay/v1/cjfph4rrc1uhx0135aao4tpfg', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ 'query': introspectionQuery }),
})
.then(res => res.json())
.then(res => {
  console.log(res);
  const schemaString = printSchema(buildClientSchema(res.data), {
    commentDescriptions: true,
  });
  fs.writeFileSync('schema.graphql', schemaString)
})
.catch(err => console.error(err))
