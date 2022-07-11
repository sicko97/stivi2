import { CommodityStatus } from "./commodity_status";

export class Commodity{
    id: string;
    entp_id: string;
    name: string;
    unit: string;
    pdv: number;
    image: string;
    status: Array<CommodityStatus>;
}