import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    força
    static tipo = 'Guerreiro'
    static descricao = 'Você sera esmagado pela fúria do Guerreiro!'

    constructor(nome,força){
        super(nome)
        this.força=força
        
    }

    obterInsignia(){
        if (this.força >= 5 && this.level >= 7) {
            return '`Guerreiro furioso'
        }
        return super.obterInsignia()
    }
}