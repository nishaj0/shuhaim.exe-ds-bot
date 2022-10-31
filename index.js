require('dotenv').config();
const{ Client, GatewayIntentBits, InteractionCollector } = require(`discord.js`);
const client = new Client ({ intents : GatewayIntentBits.Guilds });

client.once('ready', ()=>{
  console.log('Ready!');
})

client.on('interactionCreate', async Interaction => {
  if(!Interaction.isChatInputCommand()) return;
  const { commandName } = Interaction;

  if(commandName === 'myre'){
    await Interaction.reply('nialmubre edakkara vazhikkadav')
  }
})

client.login(process.env.TOKEN)