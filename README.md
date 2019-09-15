# Relay Modern & GraphCool Personal Project

## [Demo](https://useful-bookmarks.netlify.com/) Page on Netlify

### Description

- this starts with the aforementioned Nikolas Burk's [Getting started with Relay Modern](https://blog.graph.cool/getting-started-with-relay-modern-46f8de6bd6ec) but is being added typescript, react-router, styled-components, a simple log-in system with session storage and responsive design.
- basically this is a bookmark page with working practice codes (I'd say something like *Etúde*)

### How to use graphcool along with it

- make a graphcool account and do graphcool init and deploy
- globally get the package `get-graphql-schema` and download schema from graphcool server by ```get-graphql-schema __RELAY_API_ENDPOINT__ > //schema.graphql``` and update it whenever you modify the graphql structure.

### Ongoing status

- &#9745; added src and anchor
- &#9745; login system (using [GraphCool's Email Auth System](https://github.com/graphcool/templates/tree/master/auth/email-password))
- &#9745; added comments system
- &#9745; will complete comments system by adding mutations for CUD, relay's pagination func for browsing a many of them
- &#9745; will "Edit" function for Posts and Comments
- &#9745; deploy to netlify pages
- &#9745; apply TypeScript on the project. Finally succeed installing typescript with relay without using unnecessary settings (thanks for CRA2!)
- &#9745; will show Creator's name (each for Post and Comment)
- &#9745; apply [Masonry for react](https://github.com/eiriklv/react-masonry-component)
- &#9745; will add likes(exactly same as hackernews' votes)
- &#9999; will add report system (email to the system admin)

- &#9744; will add small chatting system using relay's subscription func
- &#9744; will transform Graphcool to Prisma
- &#9744; will add some kind of console page for stats and browsing users-posts-comments-likes relationships
- &#9744; will transform Prisma to traditional DB by writing own resolver (maybe I can use [Prisma](https://gist.github.com/marktani/2cbbe6467cb66bc9959b63313a248988) for AWS RDS MySQL or if it works, definitely for my local DB or whatever, too. pretty awesome!)
