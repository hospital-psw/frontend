import { NewsStatus } from "./news-status";

// TODO: Refactor to be an interface instead of class
export class News {
  public id: number = 0;
  public title: string = '';
  public text: string = '';
  public image: string = '';
  public status!: NewsStatus;
  public dateCreated!: Date;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.title = obj.title;
      this.text = obj.text;
      this.image = obj.image;
      this.status = obj.status;
      this.dateCreated = obj.dateCreated;
    }
  }
}
