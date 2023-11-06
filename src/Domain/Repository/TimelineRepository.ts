import {
  AuthResponseType,
  CreateDatasetRequestType,
  CreateDatasetResponseType,
} from '@/Type';
import { CategoryEntity, TimelineEntity } from '@/Domain/Entity';

interface TimelineRepository {
  createDataset({
    semester,
    token,
    year,
  }: CreateDatasetRequestType): Promise<CreateDatasetResponseType>;
  getCategory({ token }: AuthResponseType): Promise<CategoryEntity[]>;
  getTimelines({
    token,
  }: AuthResponseType): Promise<void>;
  saveDataset(): Promise<void>;
  // getRandomTimeline
  // saveTimeline
}

export default TimelineRepository;
