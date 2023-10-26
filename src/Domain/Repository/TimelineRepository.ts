interface TimelineRepository {
  createDataset(): Promise<void>;
  getEveryTimeData(): Promise<void>;
  getTimeline(): Promise<void>;
  setTimeline(): Promise<void>;
}

export default TimelineRepository;
