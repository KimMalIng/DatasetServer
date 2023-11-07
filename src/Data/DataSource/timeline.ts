import axios from 'axios';
import Randomstring from 'randomstring';
import { TimelineModel, SubjectModel } from '@/DB';
import { TimelineEntity } from '@/Domain/Entity';
import { GetCategroyRequestType, GetCategoryResponseType, EveryTimeResponseType } from '@/Data/Model';
import { TimelineSubjectSchemaType } from '@/Type';
import { DATA_SERVER } from '@/Const';

class TimelineDataSource {
  static async getCategory({
    token,
  }: GetCategroyRequestType): Promise<GetCategoryResponseType[]> {
    try {
      const data: GetCategoryResponseType[] = await TimelineModel.find({
        userToken: token,
      }).lean();
      return data;
    } catch (error) {
      return Promise.reject(new Error('500'));
    }
  }
  static async getTimelines({token}: GetCategroyRequestType): Promise<EveryTimeResponseType[]>{
    try {
      const res = await axios.get(`${DATA_SERVER}/everytime?token=${token}`);
      const body: EveryTimeResponseType[] = res.data;
      return body;
    } catch (error) {
      return Promise.reject(new Error('500'));
    }
  }
  static async translateTimeline(data: EveryTimeResponseType[], token: string): Promise<void>{
    const body = data.map(async (d) => {
      const timelineToken = Randomstring.generate(16);
      for(let i = 0; i < d.timeline.length; i++){
        const day = d.timeline[i].day;
        for(let j = 0; j < d.timeline[i].subject.length; j++){
          const data: TimelineSubjectSchemaType = {
            day,
            endTime:  d.timeline[i].subject[j].endTime,
            startTime:  d.timeline[i].subject[j].startTime,
            name:  d.timeline[i].subject[j].name,
            timelineToken,
            type: 'const' 
          };
          const saveSubject = new SubjectModel({...data});
          await saveSubject.save();
        }
      }
      const saveTimeline = new TimelineModel({
        semester: d.semester,
        year: d.year,
        timelineToken,
        userToken:token,
      });
      await saveTimeline.save();
    });
  }
}

export default TimelineDataSource;
