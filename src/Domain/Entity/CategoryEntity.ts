class CategoryEntity {
  private semester: string | number;
  private year: number;
  private timelineToken: string;
  constructor(semester: string | number, year: number, timelineToken: string){
    this.semester = semester;
    this.year = year;
    this.timelineToken = timelineToken;
  }
};

export default CategoryEntity;