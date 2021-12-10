import config from './common/config';
import app from './app';

const PORT:string|number=config.PORT||4000

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);

export default app