import type { TimelineType } from '@/Type';

class TimelineEntity {
  constructor(
    private semester: number | string,
    private timeline: TimelineType[],
    private token: string,
    private year: number
  ) {}
}

export default TimelineEntity;
