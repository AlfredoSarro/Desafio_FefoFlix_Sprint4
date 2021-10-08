"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.filme = void 0;
var categoria_1 = require("./categoria");
var filme = /** @class */ (function (_super) {
    __extends(filme, _super);
    function filme(nome, sinopse, elenco, diretor, id, genero) {
        var _this = _super.call(this, genero) || this;
        _this.nome = nome;
        _this.sinopse = sinopse;
        _this.elenco = elenco;
        _this.diretor = diretor;
        _this.id = id;
        _this.genero = genero;
        return _this;
    }
    return filme;
}(categoria_1.categoria));
exports.filme = filme;
