import type { TimelineType, TimelineSubjectSchemaType } from '@/Type';

class TimelineEntity {
  constructor(
    private semester: number | string,
    private subject: TimelineSubjectSchemaType[],
    private year: number,
    private timelineToken: string,
    private userToken: string
  ) {}
}

export default TimelineEntity;
