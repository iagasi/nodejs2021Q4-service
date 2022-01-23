import config from './common/config';
import app from './app';
import connectToDb from './database';
import { createDefaultAdmin } from './resources/users/createDefaultAdmin';
//import { connectToDb } from './database';




const PORT: string | number = config.PORT || 4000

const start = async () => {

 await  connectToDb()

  await createDefaultAdmin()
  app.listen(PORT, "0.0.0.0", () =>
    console.log(`A Is running on http://localhost:${PORT}`)
  );


}


start()

export default app