import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenvx from '@dotenvx/dotenvx';
import chalk from 'chalk';

dotenvx.config();

const token = process.env.DISCORD_TOKEN;
const id = process.env.CLIENT_ID;

if (!token || !id) {
    console.error(chalk.red(
        'Environment variables are not set! Please create and configure the .env file.'
    ));
    process.exit(1);
}

if (token === 'token_here' || id === 'id_here') {
    console.error(chalk.red(
        'You are still using placeholder values for DISCORD_TOKEN or CLIENT_ID. Please update your .env file.'
    ));
    process.exit(1);
}


const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// Print your bot banner
console.log(chalk.magentaBright('\n╔════════════════════════════════════╗'));
console.log(chalk.magentaBright('║  '), chalk.white('NYAAA v1.0.0 - A NSFW gif bot!'), chalk.magentaBright('  ║'));
console.log(chalk.magentaBright('╚════════════════════════════════════╝\n'));

// Listen for ready event BEFORE login
client.once('clientReady', () => {
    console.log(chalk.green(`Success! Logged in as ${client.user?.tag}`));
});

// Login and catch errors
client.login(token).catch(error => {
    console.error(chalk.red('Failed to login:'), error);
    process.exit(1); // Stop process if login fails
});