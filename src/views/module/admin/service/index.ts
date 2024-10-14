import { injectable, inject } from "tsyringe";
import type { IAdminRepository } from "../interface";
import { AdmiRepository } from "../repository";

@injectable()
export class AdminService {
  constructor(@inject(AdmiRepository) private _repo: IAdminRepository) {}

  async create(value: any): Promise<any> {
    return await this._repo.create(value);
  }

  async update(value: any): Promise<any> {
    console.log("Service Updating...", value);
  }
}
