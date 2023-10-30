import axios from 'axios';
import Randomstring from 'randomstring';
import { SubjectModel, TimelineModel, UserModel } from '@/DB';

import { EveryTimeResponseType, GetEveryTimeRequestType } from '@/Data/Model';
import { DATA_SERVER } from '@/Const';

class EveryTimeDataSource {
  async getEveryTime({ everyTimeToken }: GetEveryTimeRequestType): Promise<EveryTimeResponseType[]>{
    const data: EveryTimeResponseType[] | number = await axios.post(`${DATA_SERVER}/everytime/timeline`,{
      token: everyTimeToken
    })
    .then((data) => data.data)
    .catch((error)=> error.response.statuss);
    if(typeof data === "number") return Promise.reject(data);
    return data;
  }

  async translateEveryTime(data: EveryTimeResponseType[], everyTimeToken: string): Promise<void>{
    const UserToken = await UserModel.findOne({everyTimeToken});
    if(UserToken === null) return Promise.reject(401);
    data.map(async (d) => {
      const timelineToken = Randomstring.generate(16);
      
      const saveTimeLine = new TimelineModel({
        everyTimeToken: timelineToken,
        semester: d.semester,
        token: UserToken,
        year: d.year
      })
    });
  }
};

export default EveryTimeDataSource;