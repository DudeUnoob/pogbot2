//const prefix = '$';

module.exports = {

    name: 'rps',
    description: 'A game of rock, paper, scissors!',
    category:'Fun',
    usage:'rps',

    run: async (client,message,args) => {
        const acceptedReplies = ['rock', 'paper', 'scissors'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        console.log('Bot Result:', result);
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'rock': {
                if (result === 'paper') return message.reply('I won!, I chose paper');
                else return message.reply('You won!, I chose scissors');
            }
            case 'paper': {
                if (result === 'scissors') return message.reply('I won!, I chose scissors');
                else return message.reply('You won!, I chose rock');        
            }
            case 'scissors': {
                if (result === 'rock') return message.reply('I won!, I chose rock');
                else return message.reply('You won!, I chose paper');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }



    }
}
