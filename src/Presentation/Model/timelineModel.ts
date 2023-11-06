import {CreateTimelineUseCase} from '@/Domain/UseCase';
import { TimelineRepositoryImpl } from '@/Data/Repository';
import { TimelineRepository } from '@/Domain/Repository';

class TimelineModel {
  private createTimelineUseCase: CreateTimelineUseCase;
  private timelineRepository: TimelineRepository;

  constructor(){
    this.timelineRepository = new TimelineRepositoryImpl();
    this.createTimelineUseCase = new CreateTimelineUseCase(this.timelineRepository);
  }
  async createTimeline(token: string | null | undefined){
    try {
      await this.createTimelineUseCase.execute({token});
    } catch (error) {
      if(error instanceof Error) return Promise.reject(new Error(error.message));
      return Promise.reject(new Error("500"));
    }
  }
};

export default TimelineModel;