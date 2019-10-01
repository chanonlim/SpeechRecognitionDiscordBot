// index.js
// Where the main bot livesTM

const Discord = require("discord.js")
const request = require("request")
const websocket = require("websocket")
const ffmpeg = require("fluent-ffmpeg")
const gTTS = require("node-gtts")
const config = require("./config.json")

const client = Discord.Client()

client.on("ready", () => {
  console.log(client.user.tag + " is ready!")
})

client.on("message", (message) => {
  if (message.content.startsWith(config.prefix))
    let arguments = message.content.match(/(?:[^\s"]+|"[^"]*")+/g)
    let command = arguments[0].split('').slice(config.prefix.length).join('')
    arguments.splice(0)
    arguments = arguments.map(r=> r.replace(/"/g, ""))
    if (command === "say") {
      if (message.author.member.voiceChannel == undefined) {
        message.channel.send("You aren't in a voice channel!")
      } else {
        let vc = message.author.member.voiceChannel
        
      }
    }
  }
})
