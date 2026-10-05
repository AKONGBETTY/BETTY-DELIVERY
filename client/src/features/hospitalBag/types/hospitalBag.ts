export type BagCategory =
  | "Mother"
  | "Baby"
  | "Partner"
  | "Documents";

export interface HospitalBagItem {
  id: number;
  category: BagCategory;
  name: string;
  packed: boolean;
  essential: boolean;
}