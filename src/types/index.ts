export interface Product {
  id: string;
  name: string;
  nameFi: string;
  category: 'rings' | 'cufflinks' | 'necklaces';
  image: string;
  etsyUrl: string;
}

export type Category = 'rings' | 'cufflinks' | 'necklaces';

export interface CategoryInfo {
  id: Category;
  image: string;
  path: string;
}
