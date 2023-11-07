import axios from 'axios';
import Randomstring from 'randomstring';
import { SubjectModel, TimelineModel, UserModel } from '@/DB';

import { EveryTimeResponseType, GetEveryTimeRequestType } from '@/Data/Model';
import { DATA_SERVER } from '@/Const';

class EveryTimeDataSource {
  static async getEveryTime({
    everyTimeToken,
  }: GetEveryTimeRequestType): Promise<EveryTimeResponseType[]> {
    const data: EveryTimeResponseType[] | number = await axios
      .post(`${DATA_SERVER}/everytime/timeline`, {
        token: everyTimeToken,
      })
      .then((d) => d.data)
      .catch((error) => error.response.statuss);
    if (typeof data === 'number')
      return Promise.reject(new Error(String(data)));
    return data;
  }

  static async translateEveryTime(
    data: EveryTimeResponseType[],
    everyTimeToken: string
  ): Promise<void> {
    try {
      const UserToken = await UserModel.findOne({ everyTimeToken });
      if (UserToken === null) return Promise.reject(new Error('401'));
      data.map(async (d) => {
        const timelineToken = Randomstring.generate(16);
        const saveTimeLine = new TimelineModel({
          timelineToken,
          semester: d.semester,
          token: UserToken,
          year: d.year,
        });
        await saveTimeLine.save();
        d.timeline.map((t) => {
          const { day } = t;
          t.subject.map(async (s) => {
            const saveSubject = new SubjectModel({
              day,
              endTime: s.endTime,
              startTime: s.startTime,
              name: s.name,
              timelineToken,
              type: 'const',
            });
            await saveSubject.save();
          });
        });
      });
    } catch (error) {
      return Promise.reject(new Error('500'));
    }
  }
}

export default EveryTimeDataSource;
