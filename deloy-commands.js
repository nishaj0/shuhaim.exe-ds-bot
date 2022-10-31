require('dotenv').config()
const {SlashCommandBuilder, Routes} = require('discord.js');
const { REST } = require('@discordjs/rest')

const commands =[
   new SlashCommandBuilder().setName('myre').setDescription('Replays with oombittaram!'),
].map(command => command.toJSON());

const rest =new REST({version : '10'}).setToken(process.env.TOKEN)

rest.put(Routes.applicationGuildCommands(process.env.CLIENT_id,process.env.GUILD_id),{body: commands})
.then(()=> console.log('Successfully registered application command.'))
.catch(console.error)