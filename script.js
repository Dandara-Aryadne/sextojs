// Crie um objeto que receba ao menos três propriedades sobre você.
let aboutMe = {
    nome: "Dandara Aryadne",
    filme: "Stardust",
    música: "Hans Zimmer"
 
}
  console.log(aboutMe)
// Adicione uma nova propriedade sem alterar seu objeto inicial.
aboutMe.bebida = "Agua"

// Remova uma propriedade desse objeto.
delete aboutMe.música
//Mostre no console todas as propriedades desse objeto.
console.log(aboutMe)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. //Na propriedade amigos, adicione ao menos 4 itens.
let cadastro =[{
    nome: "Maria Celeste",
    idade: 50,
    telefone: 351920512885,
    amigos: ["Andreia", "Luana", "Anita", "Renata",]
},

{
    nome: "Marlon Yuri",   
    idade: 29,
    telefone: 351920512885,
    amigos: ["Eduardo", "Arthur", "William", "Jade"]
},
{
    nome: "Dandara Aryadne",
    idade: 30,
    telefone: 351920512885,
    amigos: ["Mariana", "Irina", "Felipe", "Michelle"]
},
{
    nome: "Mariana",
    idade: 30,
    telefone: 351920512885,
    amigos: ["Guilherme", "Carla", "Leticia", "Debora"]
},
{
    nome: "Limão",
    idade: 31,
    telefone: 351920512885,
    amigos: ["Dandara", "Alice", "Úrsula", "Beatriz", ]
}
]
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[2].amigos)
console.log(cadastro[3].amigos)
console.log(cadastro[0].amigos)
console.log(cadastro[1].amigos)
console.log(cadastro[3].amigos)