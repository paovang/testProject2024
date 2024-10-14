export interface IAdminRepository {
  create(value: any): Promise<any>;
  update(value: any): Promise<any>;
}
