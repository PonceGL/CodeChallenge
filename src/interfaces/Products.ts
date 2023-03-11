export interface Products {
  createdAt: string;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
  from_account_id?: number;
  to_account_id?: number;
  amount?: number;
  verification_code?: string;
  reason?: string;
}
