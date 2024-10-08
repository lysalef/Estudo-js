const empresas = [
    { nome: 'Samsung', valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938 },
    { nome: 'Microsoft', valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel', valorDeMercado: 117, CEO: 'Brian Krzanich', anoDeCriacao: 1968 },
    { nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004 },
    { nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006 },
    { nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976 }
];

// 1. Listar o nome de todas as empresas

const listaDeEmpresas = empresas.map ((empresa) => (empresa.nome))
console.log (listaDeEmpresas);

empresas.forEach((empresa) => {
    console.log(empresa.nome);
})

const nomesMapeados = empresas.map (empresa => empresa.nome);
console.log(nomesMapeados)

// 2. Filtrar empresas com valor de mercado maior que 100

const valorDaEmpresa = empresas.filter((empresa) => {
    if (empresa.valorDeMercado > 100) {
        console.log (empresa.nome)
        console.log(empresa.valorDeMercado)
    }
})

// 3. Calcular o valor total de mercado de todas as empresas

const valorTotalDeMercado = empresas.reduce((total, empresa) => total + empresa.valorDeMercado, 0);

console.log(`O valor total de mercado de todas as empresas é: ${valorTotalDeMercado}.`);

// 4. Encontrar a empresa mais antiga

const empresaMaisAntiga = empresas.reduce((maisAntiga, empresaAtual) => {
    return (empresaAtual.anoDeCriacao < maisAntiga.anoDeCriacao) ? empresaAtual : maisAntiga;
});

console.log(`A empresa mais antiga é: ${empresaMaisAntiga.nome}, criada em ${empresaMaisAntiga.anoDeCriacao}.`);

// 5. Criar um novo array com nome e CEO das empresas

const novaLista = empresas.map(empresa => {
    return { nome: empresa.nome, CEO: empresa.CEO };
});

console.log(novaLista);

