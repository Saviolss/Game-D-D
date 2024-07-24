import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza
    static descricao = 'Você tem o meu arco!'
    static tipo = 'Arqueiro'

    constructor(nome,destreza){
        super(nome)
        this.destreza=destreza
    }
    obterInsignia(){
        if (this.level >= 5) {
            return 'Dominador das flechas'
        }
        return super.obterInsignia()
    }

}