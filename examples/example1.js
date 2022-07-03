const unicodeEmojis=require("../UnicodeEmojis.json")
function validateEmoji(emoji){
  if(emoji.startsWith(':') && emoji.endsWith(':')) emoji=emoji.slice(1,-1) // just in case it's in form of :smile:
  return emoji in unicodeEmojis
}

let emoji="grinning"
if(validateEmoji(emoji)) console.log("it's a valid emoji for discord")
else console.log("Nah, this is not a valid emoji for discord")