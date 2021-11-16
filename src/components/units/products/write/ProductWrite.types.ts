export interface IMyUpdateProductInput {
  name?: string;
  price?: number;
  remarks?: string;
  contents?: string;
  tags?: string[];
  useditemAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}
