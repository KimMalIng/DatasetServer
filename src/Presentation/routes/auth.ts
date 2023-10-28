import { Router, Request, Response } from 'express';

import { AuthModel } from '@/Model';
import { AuthRequestType, AuthResponseType } from '@/Type';

const router: Router = Router();
const model = new AuthModel();

router.post('/', async (req: Request, res: Response) => {
  const {id, password}: AuthRequestType = req.body;
  try {
    const data = await model.login({id, password});
    res.status(200);
    res.send(data);
  } catch (error) {
    res.status(400);
    res.send("Please Retry Auth");
  }
});

router.post('/credential', async (req: Request, res: Response)=>{
  const { token }: AuthResponseType = req.body;
  try {
    const data = await model.getCredential({token});
    if(data) {
      res.sendStatus(200);
      return;
    }
    res.sendStatus(401);
  } catch (error) {
    res.status(401);
    res.send("Unauthrized Token");
  }
});

export default router;
