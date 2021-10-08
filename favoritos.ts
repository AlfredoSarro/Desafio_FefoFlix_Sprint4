import { filme } from './filmes';

export class favoritos extends filme {
    constructor(public nome: string, public sinopse: string, public elenco: string, public diretor: string, public id: number, public idFav: number, public genero: string){
        super (nome, sinopse, elenco, diretor, id, genero);}
    };
