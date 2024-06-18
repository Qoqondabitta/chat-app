import { HasFormatter } from "../Hasformat.js";

export class Ford implements HasFormatter {
    constructor(public a:string,public b:string,public c:string,public d:number) {

    }
    format(): string {
        return `${this.b} colored ${this.a} costs ${this.d}$ and made in ${this.c}, origination country(Ford)`;
    }
}