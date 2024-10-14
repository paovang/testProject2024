export interface IAdminRepository {
  getAll(): Promise<any>;
  create(value: any): Promise<any>;
  update(value: any): Promise<any>;
}
