import {login} from "./login";
import {filme} from './filmes';

const login1 = new login ("Alfredo", "asarro@brq.com", "1234", []);

const filme1 = new filme ("O Senhor dos Anéis", "O Senhor dos Anéis é uma trilogia cinematográfica dirigida por Peter Jackson com base na obra-prima homónima de J. R. R. Tolkien", "Elijah Wood, Sean Astin, Ian McKellen, Sala Baker...", "Peter Jackson", 1001, "Ação/Fantasia");

const filme2 = new filme ("John Wick", "John Wick é uma franquia americana de thriller de ação neo-noir criada pelo roteirista Derek Kolstad e de propriedade da Lionsgate. Keanu Reeves interpreta John Wick, um assassino aposentado que se torna ativo novamente em sua busca por vingança", " Keanu Reeves, Riccardo Scamarcio, Ian McShane, Laurence Fishburne...", "Chad Stahelski", 1002, "Ação");

const filme3 = new filme ("Harry Potter", "Harry Potter é uma série de filmes baseada nos romances homônimos de J. K. Rowling. A série é distribuída pela Warner Bros. e consiste em oito filmes de fantasia, começando com Harry Potter e a Pedra Filosofal e culminando com Harry Potter e as Relíquias da Morte - Parte 2", "Daniel Radcliffe, Rupert Grint e Emma Watson...", "Chris Columbus", 1003, "Fantasia");

console.log("======================INFORMAÇÕES DO USUARIO========================");

login1.addFavorito(filme1);

login1.addFavorito(filme2);

login1.addFavorito(filme3);

console.log(login1);