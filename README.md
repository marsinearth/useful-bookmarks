# Relay Modern & GraphCool Personal Project

> A follow-up from Nikolas Burk's [Getting started with Relay Modern](https://blog.graph.cool/getting-started-with-relay-modern-46f8de6bd6ec),
> [github source](https://github.com/graphcool-examples/react-graphql/tree/master/quickstart-with-relay-modern)

used fixed version of relay-compiler: [Explanation](https://github.com/facebook/relay/pull/2142#issuecomment-369053139)

- will be personally modified to be a bookmarks page for the technical tricks on the Internet, with a log-in system.
- it's going to be somewhat similar to hackernews + instagram
  - added src and anchor
  - added login system (using [GraphCool's Email Auth System](https://github.com/graphcool/templates/tree/master/auth/email-password))
  - added comments system
  - will complete comments system by adding mutations for CUD, relay's pagination func for browsing a many of them
  - will Edit funcs for Posts and Comments
  - deploy to github pages (ongoing)
  
  - will add likes(exactly same as hackernews' votes)
  - will add small chatting system using relay's subscription func
  - will add some kind of console page for stats and browsing users-posts-comments-likes relationships
  - will transform graphcool to traditional DB by writing own resolver (maybe I can use [Prisma](https://gist.github.com/marktani/2cbbe6467cb66bc9959b63313a248988) for AWS RDS MySQL or if it works, definitely for my local DB or whatever, too. pretty awesome!)
