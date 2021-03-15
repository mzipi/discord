const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client();

client.on('message', message => console.log('mensaje recibido'));
client.on

client.login(token);