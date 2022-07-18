# discord-emojis-parser package
This package is used to parse discord unicode emojis from a text, with `name`, `svg image`


## Example: Using Unicodes
```js
const parser=require('discord-emojis-parser');

let text=`Hello world 🌍!
I'm alone here? 😭`

parser.parse(text)
// Output
// [
//   {
//     name: 'earth_africa',
//     svg: 'https://discord.com/assets/..svg',
//     unicode: '🌍',
//     representation: 'earth_africa'
//   },
//   {
//     name: 'sob',
//     svg: 'https://discord.com/assets/..svg',
//     unicode: '😭',
//     representation: 'sob'
//   }
// ]
```

## Example: Using Represenatives
```js
const parser=require('discord-emojis-parser');

let text=`Hello world :earth_africa:!
I'm alone here? :sob:`

parser.parse(text)
// Output
// [
//   {
//     name: 'earth_africa',
//     svg: 'https://discord.com/assets/....svg',
//     unicode: '🌍',
//     representation: 'earth_africa'
//   },
//   {
//     name: 'sob',
//     svg: 'https://discord.com/assets/....svg',
//     unicode: '😭',
//     representation: 'sob'
//   }
// ]
```