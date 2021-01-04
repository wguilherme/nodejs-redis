//index.js
(async () => {

   const redis = require('promise-redis')();
   const client = redis.createClient();

   // const result = await client.set('chave', 'valor');
   // console.log(result)

   console.log('ok')


})();