import { inject, injectable } from "tsyringe";
import { IAdminRepository } from "../interface";
import { AxiosApi } from "@/common/configuration/axios.config";

@injectable()
export class AdmiRepository implements IAdminRepository {
  constructor(@inject(AxiosApi) private _api: AxiosApi) {}

  async getAll(): Promise<any> {
    return await this._api.axios
      .get("room-types/")
      .then(function (res) {
        return res;
      })
      .catch(function (error) {
        console.error("Error fetching countries:", error);
      });
  }
  async create(value: any): Promise<any> {
    const res = await this._api.axios
      .post("room-types/", {
        name: value.name,
        description: "Good",
        price_per_night: 150000,
        capacity: 12,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return res;
  }

  async update(value: any): Promise<any> {
    const res = await this._api.axios
      .put(`room-types/${value.id}/`, {
        name: value.name,
        description: value.description,
        price_per_night: 150000,
        capacity: 12,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    return res;
  }
}
