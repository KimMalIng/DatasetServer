import { TimelineModel } from '@/DB';
import { GetCategroyRequestType, GetCategoryResponseType } from '@/Data/Model';

class TimelineDataSource{
  async getCategory({token}: GetCategroyRequestType): Promise<GetCategoryResponseType[]>{
    try {
      const data: GetCategoryResponseType[] = await TimelineModel.find({userToken: token}).lean();
      return data;
    } catch (error) {
      return Promise.reject(new Error("500"));
    }
  }
}

export default TimelineDataSource;