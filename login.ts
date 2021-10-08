import { filme } from "./filmes";

export class login{
    constructor (public nome: string, public email: string, private senha: string, public listaFav: Array<filme>){
    };
    addFavorito(filme: filme){
        this.listaFav.push(filme);
    }
};




