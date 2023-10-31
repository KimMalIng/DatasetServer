import { EveryTimeDataSource } from '@/Data/DataSource';
import { TimelineRepository } from '@/Domain/Repository';
import { CreateDatasetRequestType, CreateDatasetResponseType, AuthResponseType, GetCategoryResponseType, AuthRequestType, GetEveryTimeResponseType } from '@/Type';

class TimelineRepositoryImpl implements TimelineRepository{
  createDataset({ semester, token, year, }: CreateDatasetRequestType): Promise<CreateDatasetResponseType> {
    throw new Error('Method not implemented.');
  }
  getCategory({ token }: AuthResponseType): Promise<GetCategoryResponseType[]> {
    throw new Error('Method not implemented.');
  }
  getEveryTime({ id, password, }: AuthRequestType): Promise<GetEveryTimeResponseType> {
    throw new Error('Method not implemented.');
  }
  getTimeline({ }: {}): Promise<void> {
    throw new Error('Method not implemented.');
  }
  saveDataset(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export default TimelineRepositoryImpl;