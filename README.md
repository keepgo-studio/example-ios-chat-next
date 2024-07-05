# Example for, ios chat + Next js

<p align="center">
  <img src="./public/example-nextjs.png" />
</p>

- [Description](#Description)
- [Must know before attach to Next js](#must-know-before-attach-to-next-js)
   * [1. (in Typescript) setting types](#1-in-typescript-setting-types)
   * [2. dynamic import needed](#2-dynamic-import-needed)
- [API](#api)

# Description
With this example, you can experience how to

1. set chatbot

2. show unread message counts

3. fire message from remote components

4. create new chat rooms

5. handle dark mode

6. save message data (in this project, using IndexedDB)


# Must know before attach to Next js

## 1. (in Typescript) setting types

Write a reference for the react.d.ts since to recognize web components at the React + Typescript system

```typescript
/// <reference types="ios-chat/@types/react.d.ts" />
```

## 2. dynamic import needed

Since the library works on Web Components API, dynamic loading is required

```jsx
useEffect(() => {
  import("ios-chat").then(({ addRoomListener }) => {
    // ...
  });
});

// ...

<button
  onClick={async () => {
    const handler = await import("ios-chat");

    handler.startAnswerLoading("chat");
  }}
></button>;


// or using Next js dynamic()
import dynamic from "next/dynamic";

const ChatItem = dynamic(() => import("./ChatItem"), {
  // ios-chat is not supported for SSR
  ssr: false
});

```

# API

For more information, checks [github/ios-chat](https://github.com/keepgo-studio/ios-chat/blob/main/README.md)