//index.js
(async () => {

   const redis = require('promise-redis')();
   const client = redis.createClient();

   const result = await client.set('chave', 'valor');
   const resultExpiresIn10Seconds = await client.set('chaveExpires', 'valorExpires', 'EX', 10);

   // console.log(result)
   // console.log(resultExpiresIn10Seconds)

   const logResult = await client.get('chave');
   const logResultExpiresIn10Seconds = await client.get('chaveExpires');


   console.log(logResult)
   console.log(logResultExpiresIn10Seconds)


})();