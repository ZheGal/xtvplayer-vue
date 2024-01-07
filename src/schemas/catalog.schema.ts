export interface Catalog {
  categories: CatalogCategory[];
  stations: (CatalogStation | CatalogStationVariants)[];
}

export interface CatalogCategory {
  id: number;
  title: string;
  description: string;
}

export interface CatalogStation {
  category_id: number;
  title: string;
  description?: string;
  stream: string;
  cover: string;
}

export interface CatalogStationVariants {
  category_id: number;
  title: string;
  description: string;
  stations: CatalogStation[];
  cover: string;
}
