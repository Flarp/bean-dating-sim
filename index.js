const discord = require("discord.js")
const merge = require("merge-images")

const client = new Discord.Client()
const HIM = "257341876628226059"



client.on("message", message => {
    if (message === "Start" && message.author.id === HIM) {
        console.log("this is the end")
    }
}


