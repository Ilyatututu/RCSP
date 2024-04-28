import { IntegerType } from "typeorm";

export class transp {
    id: number;
    country: string;
    price: IntegerType;
    is_free: boolean;
}