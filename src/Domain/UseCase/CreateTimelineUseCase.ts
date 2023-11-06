import { TimelineRepository } from '@/Domain/Repository';

type CreateTimelineUseCaseType = {
  token: string | null | undefined;
};

class CreateTimelineUseCase {
  private timelineRepository: TimelineRepository;
  constructor(timelineRepository: TimelineRepository){
    this.timelineRepository = timelineRepository;
  }
  async execute({token}: CreateTimelineUseCaseType): Promise<void>{
    try {
      if(typeof token !== "string") return Promise.reject(new Error("400"));
      await this.timelineRepository.getTimelines({token});
    } catch (error) {
      if(error instanceof Error) return Promise.reject(new Error(error.message));
      return Promise.reject(new Error("500"));
    }
  }
};

export default CreateTimelineUseCase;