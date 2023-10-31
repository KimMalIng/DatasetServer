import { TimelineModel, SubjectModel } from '@/DB';
import { TimelineEntity } from '@/Domain/Entity';
import { GetCategroyRequestType, GetCategoryResponseType } from '@/Data/Model';

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
  static async getTimeline({token}: GetCategroyRequestType): Promise<TimelineEntity>{
    try {
      const data: GetCategoryResponseType | null = await TimelineModel.findOne({
        timelineToken: token,
      }).lean();
      if(data === null){
        return Promise.reject(new Error('401'));
      }
      const subject = await SubjectModel.find({timelineToken: token});
      const entity = new TimelineEntity(data.semester, subject, data.year, data.timelineToken, data.userToken);
      return entity;
    } catch (error) {
      return Promise.reject(new Error('500'));
    }
  }
}

export default TimelineDataSource;
