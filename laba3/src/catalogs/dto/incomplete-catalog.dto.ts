import { IntegerType } from "typeorm";

export class IncompleteCatalogDto {
    id: number;
    category: string;
    price: IntegerType;
  }  