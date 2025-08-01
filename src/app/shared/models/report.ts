export interface Report {
  id: string;
  name: string;
  createdAt: Date;
  modifiedAt: Date;
  owner: string;
  associatedForm: string;
  description?: string;
}
