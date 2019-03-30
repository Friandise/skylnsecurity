const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const bot = new Discord.Client(); 

bot.login(process.env.TOKENS)

bot.on("ready", () => {
  console.log("LOG : Skyln sécurity est prêt !")
  //online, idle, dnd -- // TYPE | WATCHING | LISTENING | PLAYING | STREAMING
  //("Txt here", {type: ""}, {url: "https://www.twitch.tv/iceouuu"})
  
  setInterval(function(){
    let status = statuses[Math.floor(Math.random() * statuses.length)]
    bot.user.setActivity(status,{url: "https://twitch.tv/friandise_"});
  }, 10000) //temp avant changement ! 1s = 1000 | 1min = 60000

  let statuses = [
    `${bot.users.size} utilisateurs `,
    `${PREFIXS}captcha`,
    `Version: 0.1 by Friandise_#5497 `
  ]

})

var PREFIXS = "%"

bot.on('message', function (message){
  if(message.content === PREFIXS + 'captcha'){
    let role = message.guild.roles.find('name', "Vérifié ✔")

    var embed = new Discord.RichEmbed()
         .setColor('RED')
         .setDescription("Inutile d'effectuer la commande ! ")

    if(message.member.roles.find('name', 'Vérifié ✔')){
      message.member.removeRole(role)
    }
    else(message.member.roles.find('name', 'Vérifié ✔'))
    
      if(message.member.roles.find('name', 'Membre', true)){
      message.channel.send(embed).then(msg => msg.delete (5000)) 
      }
      else
      message.member.addRole(role)
     
  }

  if(message.content === PREFIXS + 'membre'){
    let roles = message.guild.roles.find('name', "Membre")

    var embed = new Discord.RichEmbed()
         .setColor('RED')
         .setDescription("Inutile d'effectuer la commande ! ")

    if(message.member.roles.find('name', 'Membre', false)){
      message.member.addRole(roles)
    }
    else(message.member.roles.find('name', 'Membre', true))
    message.channel.send(embed).then(msg => msg.delete (5000)) 
    
  }
})

let y = process.openStdin()
y.addListener("data", res => {
  let x = res.toString().trim().split(/ +/g)
  bot.channels.get("").send(x.join(" "));
})

bot.on('message', function (message){
  if (message.content === PREFIXS + 'loves')
  message.author.createDM().then(channel => {
    channel.send("Test").then(msg => msg.delete (10000))
  })
    
});


bot.on('message', function (message){
  //delete msg commande
    var strmesss = message.toString().toLocaleLowerCase().split(' ')
    var comdel = ["%captcha"]
    var filtresss = strmesss.find(function(word)
                { 
                  return comdel.includes(word)
                })
     if(filtresss){
          message.delete()
     }
  
     
  })
