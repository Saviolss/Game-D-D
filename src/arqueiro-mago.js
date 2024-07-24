import { Arqueiro } from "./module/arqueiro.js";
import { Mago } from "./module/mago.js";
import { Personagem } from "./module/personagem.js";

export class ArqueiroMago extends Personagem {
    ladoArqueiro
    ladoMago
    static descricao = 'Detentor de lanças e flechas mágicas!'
    static tipo = 'ArqueiroMago'

    constructor(nome,destreza,elementoMagico,levelMagico,inteligencia){
        super(nome)
        this.ladoArqueiro=new Arqueiro(nome,destreza)
        this.ladoMago=new Mago(nome,elementoMagico,levelMagico,inteligencia)
    }

    obterInsignia(){
        if (this.level >=5) {
            return `Flechas magicas`
        }
        return super.obterInsignia()
    }
}