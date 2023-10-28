import {
  AuthResponseType,
  AuthRequestType,
  CreateDatasetRequestType,
  CreateDatasetResponseType,
  GetCategoryResponseType,
  GetEveryTimeResponseType,
} from '@/Type';

interface TimelineRepository {
  createDataset({
    semester,
    token,
    year,
  }: CreateDatasetRequestType): Promise<CreateDatasetResponseType>;
  getCategory({ token }: AuthResponseType): Promise<GetCategoryResponseType[]>;
  getEveryTime({
    id,
    password,
  }: AuthRequestType): Promise<GetEveryTimeResponseType>;
  getTimeline({}): Promise<void>;
  saveDataset(): Promise<void>;
}

export default TimelineRepository;
