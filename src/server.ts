import config from './common/config';
import app from './app';
import connectToDb from './database';
//import { connectToDb } from './database';




const PORT: string | number = config.PORT || 4000

const start = async () => {
 
 await  connectToDb()
  app.listen(PORT, "0.0.0.0", () =>
    console.log(`App Is running on http://localhost:${PORT}`)
  );


}


start()

export default app