/**
 *  Segunda tarefa de avaliação do curso DEVstart
 * @author Gabriel DA Silva Alecrim
 */

class Atleta{
    constructor(nome,idade,peso,altura,notas){
        this.dadosDoAtleta={
            nome:nome,
            idade:idade,
            peso:peso,
            altura:altura,
            notas:notas            
        }
    } 
/** Atribuir a categoria pertencente do atleta com base em sua idade */
    calculaCategoria(){
        if((this.dadosDoAtleta.idade >= 9) && (this.dadosDoAtleta.idade <= 11)){
             return 'Infantil';
        }else{
            if((this.dadosDoAtleta.idade >= 12) && (this.dadosDoAtleta.idade <=13)){
                return 'Juvenil';
            }else{
                if((this.dadosDoAtleta.idade >=14) && (this.dadosDoAtleta.idade <= 15)){
                     return 'Intermediário';
                 }else{
                    if((this.dadosDoAtleta.idade >=16) && (this.dadosDoAtleta.idade <=30)){
                         return 'Adulto';
                    }else{
                        if((this.dadosDoAtleta.idade < 9) || (this.dadosDoAtleta.idade > 30)){
                             return 'Sem Categoria';
                        }
                    }
                }
            }

        }
    }
/**Calcular o IMC do atleta */
    calculaIMC(){
      if(this.dadosDoAtleta.peso && this.dadosDoAtleta.altura >0){
        let imc = (this.dadosDoAtleta.peso/(this.dadosDoAtleta.altura * this.dadosDoAtleta.altura));
         return imc;
      }
    }
/** Calcular a média das 5 notas do atleta, desconsiderando a maior e menor nota */
    calculaMediaValida(){
         
        let notaAtleta=[];/** variável que recebera as nota do atleta */
        let media = 0;/**variável usada para guarda as media do atleta */
        let soma=0;/** variável que receber a soma das notas */
        /**  atribui as notas de cada atleta no arry 'notasAtleta', já filtrando a maior e menor nota de cada atleta */
         notaAtleta=this.dadosDoAtleta.notas.sort(function(a,b){ return a-b}).slice(1,4);
                
        /** calcular a média do atleta e atribuindo ao arry 'media' */
            notaAtleta.map(nota=>{ soma+=nota;})
            media= soma/(notaAtleta.length);
             return media;

    }

    obtemNomeAtleta(){
        return `Nome: ${this.dadosDoAtleta.nome}`;
    }

    obtemIdadeAtleta(){
         return `Idade: ${this.dadosDoAtleta.idade}`;
    }
    obtemPesoAtleta(){
        return `Peso: ${this.dadosDoAtleta.peso}`;
    }
    obtemAltura(){
       return `Altura: ${this.dadosDoAtleta.altura}`;
    }

    obtemNotasAtleta(){
         return `Notas: ${this.dadosDoAtleta.notas}`;
    }
    obtemCategoriaAtleta(){
        return `Categoria: ${this.calculaCategoria()}`;
    }
    obtemIMC(){
        return `IMC: ${this.calculaIMC()}`;
    }
    obtemMediaValida(){
        return `Média Válida: ${this.calculaMediaValida()}`;
    }

}
const atleta =new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);


console.log(atleta.obtemNomeAtleta());
console.log(atleta.obtemIdadeAtleta());
console.log(atleta.obtemPesoAtleta());
console.log(atleta.obtemAltura());
console.log(atleta.obtemNotasAtleta());
console.log(atleta.obtemCategoriaAtleta());
console.log(atleta.obtemIMC());
console.log(atleta.obtemMediaValida());
console.log("---------------------------------");

const atleta1 =new Atleta("Pedro Cesar",
    12, 75, 1.60,
    [9.2, 7.34, 6.42, 10, 9.88]);


console.log(atleta1.obtemNomeAtleta());
console.log(atleta1.obtemIdadeAtleta());
console.log(atleta1.obtemPesoAtleta());
console.log(atleta1.obtemAltura());
console.log(atleta1.obtemNotasAtleta());
console.log(atleta1.obtemCategoriaAtleta());
console.log(atleta1.obtemIMC());
console.log(atleta1.obtemMediaValida());

console.log("---------------------------------");
const atleta2 =new Atleta("Paulo Maia",
    8, 45, 1.20,
    [5.2, 4.34, 5.42, 7, 5.88]);

console.log(atleta2.obtemNomeAtleta());
console.log(atleta2.obtemIdadeAtleta());
console.log(atleta2.obtemPesoAtleta());
console.log(atleta2.obtemAltura());
console.log(atleta2.obtemNotasAtleta());
console.log(atleta2.obtemCategoriaAtleta());
console.log(atleta2.obtemIMC());
console.log(atleta2.obtemMediaValida());
