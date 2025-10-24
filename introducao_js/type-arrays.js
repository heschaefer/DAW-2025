const arrayValor = ['1, 2, 3, 4, 5, 6']
console.log(arrayValor);

const arrayObjects = [
    {nome: 'Maria', idade: 23, presidente: false},
    {nome: 'Lula', idade: 123, presidente: true}
];

console.log('Antes: ',arrayObjects);s

arrayObjects.push({nome: 'Dilma', idade: 63, presidente: true});

console.log('Depois: ', arrayObjects);