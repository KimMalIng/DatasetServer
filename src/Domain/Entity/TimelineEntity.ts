import type { TimelineType, TimelineSubjectSchemaType } from '@/Type';

class TimelineEntity {
  private semester: number | string;

  private subject: TimelineSubjectSchemaType[];

  private year: number;

  private userToken: string;

  constructor(
    semester: number | string,
    subject: TimelineSubjectSchemaType[],
    year: number,
    userToken: string
  ) {
    this.semester = semester;
    this.subject = subject;
    this.year = year;
    this.userToken = userToken;
  }
}

export default TimelineEntity;
