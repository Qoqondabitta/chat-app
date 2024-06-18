"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ford = void 0;
var Ford = /** @class */ (function () {
    function Ford(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Ford.prototype.format = function () {
        return "".concat(this.b, " colored ").concat(this.a, " costs ").concat(this.d, "$ and made in ").concat(this.c, ", origination country(Ford)");
    };
    return Ford;
}());
exports.Ford = Ford;
