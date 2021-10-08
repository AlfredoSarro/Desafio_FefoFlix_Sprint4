"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
var login = /** @class */ (function () {
    function login(nome, email, senha, listaFav) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.listaFav = listaFav;
    }
    ;
    login.prototype.addFavorito = function (filme) {
        this.listaFav.push(filme);
    };
    return login;
}());
exports.login = login;
;
