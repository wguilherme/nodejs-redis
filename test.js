
(async () => {   

   const mysql = require('mysql2/promise');
   const conn = await mysql.createConnection("mysql://root:root@localhost:3306/users");

   const [rows] = await conn.query('select * from users where id=? limit 1', [800]);

   console.log(rows[0].name);

})();