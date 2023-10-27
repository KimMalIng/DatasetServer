import type { TimelineType } from '@/Type';

class EveryTimeEntity {
  constructor(
    private semester: number | string,
    private timeline: TimelineType[],
    private token: string,
    private year: number
  ) {}
}

export default EveryTimeEntity;
