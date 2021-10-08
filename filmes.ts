import { categoria } from "./categoria";

export class filme extends categoria{
    constructor(public nome: string, public sinopse: string, public elenco: string, public diretor: string, public id: number, public genero: string){
        super(genero);
    }
}