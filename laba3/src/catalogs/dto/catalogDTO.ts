import { IntegerType } from "typeorm";

export class CreateCatalogDto {
  category: string;
  price: IntegerType;
  affiliations: number[];
}
