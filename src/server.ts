import config from './common/config';
import app from './app';
import { createConnection } from "typeorm"
import { User } from './entities/Client';
import { Banker } from './entities/Banker';
import { Transaction } from './entities/Transaction';

const PORT: string | number = config.PORT || 4000

const start = async () => {
  const connection = await createConnection({
    type: "postgres",
    host: "db-postgres",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "test",
    entities: [User, Banker, Transaction]
  
  })

  await connection.synchronize().then(() => { console.log("connected to db"); })

  app.listen(PORT, "0.0.0.0", () =>
    console.log(`App is running on http://localhost:${PORT}`) 
  );
const user=User.create({
  name:"aaaa",
  last_name:"lastname",
  balance:123
})
await user.save()
}
start()

export default app