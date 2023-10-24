import express from 'express';

import { AuthRouter } from '@/Router';

import { PORT } from '@/Const';

const app = express();

app.use('/auth', AuthRouter);

app.listen(PORT, () => {
  console.log(`
    ----------------------
    Server Run at ${PORT}
    ----------------------
  `);
});
