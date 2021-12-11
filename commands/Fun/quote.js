const axios = require('axios');

 module.exports = {
      name: 'quote',
      description: 'A random quote',
      category:'Fun',
      usage:'quote',
      run: async (client, message,args) => {
        const quote = await axios.get('https://zenquotes.io/api/random');
        

        message.reply(quote.data[0]['q'] + ' - ' + quote.data[0]['a']);


      }
  }