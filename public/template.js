"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Words = void 0;
var Words = /** @class */ (function () {
    function Words(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Words.prototype.format = function () {
        return "".concat(this.c, " colored car costs ").concat(this.d, "$ and made in ").concat(this.a, ", origination country");
    };
    return Words;
}());
exports.Words = Words;
