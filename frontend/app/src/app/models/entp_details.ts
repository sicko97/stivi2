import { BankAccount } from "./bank_account";
import { CashRegister } from "./cash_register";
import { Storage } from "./storage";

export class EntpDetials{
    entp_id: string;
    category: string;
    code: string;
    inPDV: boolean;
    collaborators: Array<string>;
    bank_account: Array<BankAccount>;
    storage: Array<Storage>;
    cash_register: Array<CashRegister>;
}