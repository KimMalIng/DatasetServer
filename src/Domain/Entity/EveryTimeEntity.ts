import type { TimelineType } from '@/Type';

class EveryTimeEntity {
  private semester: number | string;

  private timeline: TimelineType[];

  private token: string;

  private year: number;

  constructor(
    semester: number | string,
    timeline: TimelineType[],
    token: string,
    year: number
  ) {
    this.semester = semester;
    this.timeline = timeline;
    this.token = token;
    this.year = year;
  }
}

export default EveryTimeEntity;
