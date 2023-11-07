import { Router, Request, Response } from 'express';
import { TimelineModel } from '@/Model';

const router: Router = Router();
const timelineModel = new TimelineModel();

router.post("/", async (req: Request, res: Response)=>{
  const token = req.body.token;
  try {
    await timelineModel.createTimeline(token);
    res.sendStatus(200);
  } catch (error) {
    if(error instanceof Error){
      res.sendStatus(Number(error.message));
    }
    else{
      res.sendStatus(500);
    }
  }
});

export default router;