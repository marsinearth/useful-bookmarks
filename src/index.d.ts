declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

declare module 'react-infinite-scroller' {
  const x: any
  export = x
}

declare module 'react-device-detect' {
  export type isMobile = any
}

declare module '@fortawesome/react-fontawesome' {
  export type FontAwesomeIcon = any
  export const FontAwesomeIcon: any
}

declare module 'react-animate-height' {
  const x: any
  export = x
}

declare module 'relay-devtools' {
  export type installRelayDevTools = any
  export const installRelayDevTools: any
}

declare module 'react-github-fork-ribbon' {
  const x: any
  export = x
}

declare module 'react-linkify' {
  const x: any
  export = x
}

declare module 'babel-plugin-relay/macro' {
  const x: any
  export = x
}