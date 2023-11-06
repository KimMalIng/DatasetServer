import { EveryTimeDataSource, TimelineDataSource } from '@/Data/DataSource';
import { TimelineRepository } from '@/Domain/Repository';
import {
  CreateDatasetRequestType,
  CreateDatasetResponseType,
  AuthResponseType,
} from '@/Type';
import { CategoryEntity, TimelineEntity } from '@/Domain/Entity';

class TimelineRepositoryImpl implements TimelineRepository {
  createDataset({
    semester,
    token,
    year,
  }: CreateDatasetRequestType): Promise<CreateDatasetResponseType> {
    throw new Error('Method not implemented.');
  }

  async getCategory({ token }: AuthResponseType): Promise<CategoryEntity[]> {
    try {
      const data = await TimelineDataSource.getCategory({token});
      const returnData: CategoryEntity[] = data.map((d)=>{
        return new CategoryEntity(d.semester, d.year, d.timelineToken);
      });
      return returnData;
    } catch (error) {
      if(error instanceof Error){
        return Promise.reject(new Error(error.message));
      }
      return Promise.reject(new Error("500"));
    }
  }

  async getTimelines({
    token
  }: AuthResponseType): Promise<void> {
    try {
      const data = await TimelineDataSource.getTimelines({token});
      await TimelineDataSource.translateTimeline(data, token);
    } catch (error) {
      if(error instanceof Error) return Promise.reject(new Error(error.message));
      return Promise.reject(new Error("500"));
    }
  }

  saveDataset(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default TimelineRepositoryImpl;
