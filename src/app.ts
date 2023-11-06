import express from 'express';
import bodyParser from 'body-parser';

import { AuthRouter, TimelineRouter } from '@/Router';

import { PORT } from '@/Const';

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', AuthRouter);
app.use('/timeline', TimelineRouter);

app.listen(PORT, () => {
  console.log(`
    ----------------------
    Server Run at ${PORT}
    ----------------------
  `);
});
