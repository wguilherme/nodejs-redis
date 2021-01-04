//index.js
(async () => {

   const redis = require('promise-redis')();
   const client = redis.createClient();

   const result = await client.set('chave', 'valor');
   console.log(result)

   console.log('ok');

   const result2 = await client.get('chave');
   console.log(result2)


})();