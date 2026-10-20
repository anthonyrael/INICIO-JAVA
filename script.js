//console.log("")mostra uma informaçao na tela
console.log("Óla Mundo");
console.log("eu amo a minha Agdinha");
console.log(typeof "numero") //string
console.log(typeof 1)// number
console.log(typeof true)//boolearn
console.log(typeof false)//boolearn

//váriavel
//const nao pode ter o valor alterado durante o programa
const nome = "Agda"
console.log(nome)
//let pode ter seu valor alterado durante o programa

let peso = 45+"kg";
console.log(peso)
let idade = 16;
console.log(idade)
console.log("Óla  " +  nome + ", que tem" + idade + "anos.");

peso = 47+"kg";
idade = 17;
console.log(idade);
console.log(peso)
console.log(`Óla  ${nome}, que tem ${idade} anos.`);

let nome2 = "Bruna"
console.log(nome2)
let peso2 = 68+"kg";
console.log(peso2)

let idade2 = 37;
console.log(idade2)
console.log("Óla  " +  nome2 + ", que tem  " + idade2 + "anos.");

peso2 = 69+"kg";
idade2 = 38;
nome2 = "Silva";
console.log(idade2);
console.log(peso2)
console.log(nome2)
console.log(`Óla  ${nome2}, que tem   ${idade2} anos.`);


//MÉTODOS DE STRING
const texto = "JavaScript"
//conta quantos caracteres a string tem
console.log(texto.length)
//deixa todas as letras maiusculas
console.log(texto.toUpperCase())
//deixa todas as letras minusculas
console.log(texto.toLowerCase())

const nome_completo = "Anthony Israel Silva Lira"

console.log(nome_completo.includes("Lira"))//true

console.log(10>3)//true
console.log(123>1111)//false
console.log(10>=10)//true
console.log(10<=5)//false
console.log("10" == 10)//true
console.log("10" === 10)//false
console.log(10 !== 5)//true

 const idade_pessoa = 16

 console.log(idade_pessoa >=17)
 console.log(idade_pessoa >=15)

 const nomeCompleto = "Anthony Israel Silva Lira"
 console.log(nomeCompleto == "anthony israel silva lira")
  console.log(nomeCompleto == "Anthony Israel Silva Lira")
   console.log(nomeCompleto == "anthony israel silva lira")
    console.log(nomeCompleto == "Anthony Israel Silva Lira")



//COLETAMOS A IDADE DA PESSOA
let idadePessoa = 19;
//VERIFICAR SE É MAIOR QUE 18 ANOS
if(idadePessoa >=18){
    //SE MAIOR OU IGUAL A 18 ENTÃO ELA É MAIOR DE IDADE
console.log("ja Pode Ser Preso HAHAHAHA!😁👍")
}else{

    //SE MENOR QUE 18 ENTÃO ELA É MENOR DE IDADE
    console.log("Não vai para Balada!😂😂😂")
}

//coletamos a idade da pessoa
let idadeVotacao = 19
//verificar se a idade da pessoa é maior que 70
if(idadeVotacao > 70){
    console.log("Você não é obrigado a Votar!")
}else if (idadeVotacao >= 18){

    // senão se a idade da pessoa for maior ou igual a 18 
 console.log("Você tem que votar obrigatoriamente!")   
}else if (idadeVotacao >= 16){
// senão se a idade da pessoa for maior ou igual a 16
console.log("Você não é obrigada a votar,mas caso queira pode!")
} else{
//senão for nenhuma das alternativas anteriores
console.log("Você Não pode votar!")
}




//PASSOU E NAO PASSOu-----------------------------------

//ver se Passou de ano
let Notas = 6;
//Maior que 7 passou
if(Notas >=7){
    //SE MAIOR Ou superior a 7 voce passou
console.log("Você Passou🥳")
}else{

    //SE MENOR QUE 7 voce nao passou
    console.log("Você Não Passou😢")
}

//DIFERENÇA DE NUMEROS-----------------------------------
let numero1 = 10
let numero2 = 10

if (numero1 > numero2) {
console.log(`O numero1 é maior que o ${numero2}`)
}


else if (numero2 > numero1){
console.log(`O numero2 é maior que o ${numero1}`)
}


else if (numero1 = numero2) {
    console.log(`Os dois numeros são iguais`)}


//SISTEMA DE SENHA-----------------------------------


let SENHA ="ABC"

if(SENHA == "ABC"){
    console.log("SUA SENHA ESTA CORRETA🥳")
}else{
    console.log("SUA SENHA ESTA ERRADAAAA!!!😡") 
}



//TEMPERATURA-----------------------------------

let temperatura = 11;

if (temperatura < 18) {
  console.log("Frio🥶");
} else if (temperatura <= 27) {
  console.log("Agradável🙂");
} else {
  console.log("Quente🫠");
}




let nota = 9 ;

if (nota > 8){
console.log("exelente");    
}else if (nota >=7){console.log("bom")
}else if (nota >=5){console.log("regular")
}else{console.log("insuficiente")}





const dia = 2;

if (dia === 1) {
  console.log("Domingo");
} else if (dia === 2) {
  console.log("Segunda-feira");
} else if (dia === 3) {
  console.log("Terça-feira");
} else if (dia === 4) {
  console.log("Quarta-feira");
} else if (dia === 5) {
  console.log("Quinta-feira");
} else if (dia === 6) {
  console.log("Sexta-feira");
} else if (dia === 7) {
  console.log("Sábado");
} else {
  console.log("Dia inválido");
}


















