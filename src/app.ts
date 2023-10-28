import express from 'express';
import bodyParser from 'body-parser';

import { AuthRouter } from '@/Router';

import { PORT } from '@/Const';

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

app.use('/auth', AuthRouter);

app.listen(PORT, () => {
  console.log(`
    ----------------------
    Server Run at ${PORT}
    ----------------------
  `);
});
