# Relay Modern & GraphCool Personal Project

> A follow-up from Nikolas Burk's [Getting started with Relay Modern](https://blog.graph.cool/getting-started-with-relay-modern-46f8de6bd6ec),
> [github source](https://github.com/graphcool-examples/react-graphql/tree/master/quickstart-with-relay-modern)

used fixed version of relay-compiler: [Explanation](https://github.com/facebook/relay/pull/2142#issuecomment-369053139)

- will be personally modified to be a bookmarks page for the technical tricks on the Internet, with a log-in system.
- it's going to be somewhat similar to hackernews + instagram
  - added src and anchor
  - added login system (using [GraphCool's Email Auth System](https://github.com/graphcool/templates/tree/master/auth/email-password))
  - added comments system (ongoing)
  - will complete comments system by adding mutations for CUD, relay's pagination func for browsing a many of them
  - will add likes(exactly same as hackernews' votes)
  - will add small chatting system using relay's subscription func
  - will add some kind of console page for stats and browsing users-posts-comments-likes relationships
  - will transform graphcool to traditional DB by writing own resolver (headache reserved T^T maybe redis.....!)
