import { injectable } from "tsyringe";
import { IAdminRepository } from "../interface";

@injectable()
export class AdmiRepository implements IAdminRepository {
  async create(value: any): Promise<any> {
    console.log("create repo", value);
  }

  async update(): Promise<any> {
    console.log("update repo");
  }
}
