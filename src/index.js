import { Personagem } from "./module/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./module/mago.js"
import { Arqueiro } from "./module/arqueiro.js"
import { ArqueiroMago } from "./arqueiro-mago.js"
import { Guerreiro } from "./module/guerreiro.js"

const arqueiroBruno = new Arqueiro('Bruno',7,8,6,7)
const magoBartolomel = new Mago('Bartolomel',7,'Gelo',10,8)
const arqueiroMagoChico = new ArqueiroMago('Chico',7,10,'ar',4,8)
const guerreiroAnna = new Guerreiro('Anna',8,6)
//arqueiroBruno.#level = 11 
const personagens = [arqueiroBruno,magoBartolomel,arqueiroMagoChico,guerreiroAnna]
new PersonagemView (personagens).render()

