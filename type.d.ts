export interface Product {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  category: string;
  subCategory: string;
  features: string;
  brand: string;
  images: string[];
  isNew: boolean;
  sponsored: boolean;
  deals: boolean;
  newDeals: boolean;
  flashSale: boolean;
  itemsLeft?: number; // Optional, only applies if flashSale is true
  variations?: string[]; // Optional, applies if product has different variations
  warranty: boolean;
  warrantyPeriod?: string; // Optional, only applies if warranty is true
  officialStore: boolean;
  }[];

  export interface Item {
    _id: number;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    category: string;
    subCategory: string;
    features: string;
    brand: string;
    images: string[];
    isNew: boolean;
    sponsored: boolean;
    deals: boolean;
    newDeals: boolean;
    flashSale: boolean;
    itemsLeft?: number; // Optional, only applies if flashSale is true
    variations?: string[]; // Optional, applies if product has different variations
    warranty: boolean;
    warrantyPeriod?: string; // Optional, only applies if warranty is true
    officialStore: boolean;
  };