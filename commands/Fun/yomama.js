const axios = require('axios');

module.exports = {
    name: 'yomama',
    description: 'yomama roast',
    category:'Fun',
    run: async(client, message, args) => {
        const yomama = await axios.get('https://api.yomomma.info/');


        message.reply(yomama.data['joke']);
    }
}