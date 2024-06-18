"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Volvo = void 0;
var Volvo = /** @class */ (function () {
    function Volvo(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Volvo.prototype.format = function () {
        return "".concat(this.b, " colored ").concat(this.a, " costs ").concat(this.d, "$ and made in ").concat(this.c, ", origination country(Volvo)");
    };
    return Volvo;
}());
exports.Volvo = Volvo;
