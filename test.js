
(async () => {
   const redis = require('promise-redis')();
   const client = redis.createClient();
   const mysql = require('mysql2/promise');
   const conn = await mysql.createConnection("mysql://root:root@localhost:3306/users");

   // cache client
   const clientCache = await client.set('800', 'Victoria 7073 (cached)', 'EX', 20);

   const userId = 800;

   console.time('mysql')
   for (let x = 0; x < 1000; x++) {

      let cachedUser = await client.get(userId);

      if (!cachedUser) {
         const [rows] = await conn.query('select * from users where id=? limit 1', [800]);
         console.log(rows[0].name, rows[0].age);
      } else {
         console.log('aqui', cachedUser);
      }
   }
   console.timeEnd('mysql');

})();