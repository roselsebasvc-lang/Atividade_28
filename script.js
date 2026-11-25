// Exercício 1: Controle de Estoque Simples (Lista Básica)
// Cenário: Você está desenvolvendo o módulo inicial do sistema de uma loja de informática e precisa armazenar o nome dos periféricos disponíveis na vitrine.
// Tarefas:
// Crie uma lista chamada periféricos contendo 5 itens(objetos) de sua escolha (ex: "Teclado Mecânico", "Mouse Gamer", etc.).
// Altere o terceiro item da lista para "Webcam Full HD".
// Utilizando um laço de repetição (for), percorra a lista e exiba no console cada item acompanhado da sua posição na vitrine (ex: "Posição 0: Teclado Mecânico").

let perifericos = [
  "Teclado Mecânico",
  "Mouse Gamer",
  "Headset",
  "Monitor 144Hz",
  "Mousepad"
];

perifericos = "Webcam Full HD";

for (let posicao = 0; posicao < perifericos.length; posicao = posicao + 1) {
  console.log("Posição " + posicao + ": " + perifericos[posicao]);
}


// Exercício 2: Ficha Cadastral de Equipamento (Objeto Básico)
// Cenário: O setor de suporte técnico precisa catalogar as especificações das máquinas do laboratório para facilitar a manutenção.
// Tarefas:
// Crie um objeto chamado computador com as seguintes propriedades: patrimonio (texto), processador (texto), memoriaRAM (número em GB) e emManutencao (booleano).
// Acesse e exiba no console uma frase resumindo a máquina (ex: "O computador de patrimônio [patrimonio] possui processador [processador] e [memoriaRAM]GB de RAM.").

let computador = {
  patrimonio: "LAB-015",
  processador: "Intel Core i5",
  memoriaRAM: 16,
  emManutencao: false
};

console.log(
  "O computador de patrimônio " + computador.patrimonio + 
  " possui processador " + computador.processador + 
  " e " + computador.memoriaRAM + "GB de RAM."
);

// Exercício 3: Carrinho de Compras (Lista de Objetos)
// Cenário: Você precisa calcular o valor total do carrinho de compras de um cliente em um e-commerce.
// Tarefas:
// Crie uma lista chamada carrinho contendo 4 objetos. Cada objeto deve representar um produto com as propriedades: nome (texto), preco (número) e quantidade (número).
// Crie uma variável valorTotal iniciando em 0.
// Usando um loop (for), percorra a lista carrinho, multiplique o preco pela quantidade de cada item e some ao valorTotal.
// Ao final, exiba no console o valor total da compra.

let carrinho = [
  { nome: "Teclado Mecânico", preco: 250, quantidade: 1 },
  { nome: "Mouse Gamer", preco: 120, quantidade: 2 },
  { nome: "Headset", preco: 180, quantidade: 1 },
  { nome: "Mousepad", preco: 50, quantidade: 3 }
];

let valorTotal = 0;

for (let posicao = 0; posicao < carrinho.length; posicao = posicao + 1) {
  let itemAtual = carrinho[posicao];
  let subtotal = itemAtual.preco * itemAtual.quantidade;
  
  valorTotal = valorTotal + subtotal;
}

console.log("O valor total da compra é: R$ " + valorTotal);


// Exercício 4: Perfil de Usuário e Permissões (Objeto com Listas)
// Cenário: No sistema de autenticação da empresa, cada usuário possui dados básicos e uma lista de módulos que tem permissão para acessar.
// Tarefas:
// Crie um objeto chamado usuario com as propriedades: nome (texto), cargo (texto) e permissoes (uma lista de textos, como ["vendas", "relatorios", "estoque"]).
// Exiba no console o nome e o cargo do usuário.
// Utilizando um loop (for), percorra apenas a lista permissoes que está dentro do objeto e imprima cada permissão no formato: "- Acesso liberado: [permissao]".
// Ainda dentro do loop, verifique (usando if) se o usuário possui a permissão "admin". Caso tenha, exiba um alerta no console: "Atenção: Usuário com privilégios totais!".

let usuario = {
  nome: "Carlos Silva",
  cargo: "Gerente de Operações",
  permissoes: ["vendas", "relatorios", "admin", "estoque"]
};

console.log("Usuário: " + usuario.nome + " | Cargo: " + usuario.cargo);

for (let posicao = 0; posicao < usuario.permissoes.length; posicao = posicao + 1) {
  let permissaoAtual = usuario.permissoes[posicao];
  
  console.log("- Acesso liberado: " + permissaoAtual);

  if (permissaoAtual === "admin") {
    console.log("Atenção: Usuário com privilégios totais!");
  }
}


// Exercício 5: Gerenciamento de Chamados de Suporte (Lista de Objetos com Listas)
// Cenário: Desafio final! Você vai estruturar a fila de atendimentos do Help Desk, onde cada chamado possui um histórico de atualizações feitas pelos técnicos.
// Tarefas:
// Crie uma lista chamada chamados contendo 3 objetos.
// Cada objeto deve ter: id (número), cliente (texto), resolvido (booleano) e historico (uma lista de textos com os passos já realizados, ex: ["Chamado aberto", "Técnico atribuído"]).
// Utilizando loops aninhados (um for para percorrer os chamados e outro for dentro dele para percorrer o historico de cada chamado), exiba no console o ID, o nome do cliente e todas as mensagens do histórico daquele chamado.
// Utilize um if para exibir apenas os chamados em que a propriedade resolvido seja igual a false.

let chamados = [
  {
    id: 101,
    cliente: "Ana Souza",
    resolvido: false,
    historico: ["Chamado aberto", "Técnico atribuído", "Aguardando peça"]
  },
  {
    id: 102,
    cliente: "Bruno Lima",
    resolvido: true,
    historico: ["Chamado aberto", "Reset de senha realizado", "Chamado encerrado"]
  },
  {
    id: 103,
    cliente: "Carla Mendes",
    resolvido: false,
    historico: ["Chamado aberto", "Diagnóstico remoto iniciado"]
  }
];

for (let posicaoChamado = 0; posicaoChamado < chamados.length; posicaoChamado = posicaoChamado + 1) {
  let chamadoAtual = chamados[posicaoChamado];

  if (chamadoAtual.resolvido === false) {
    console.log("Chamado #" + chamadoAtual.id + " - Cliente: " + chamadoAtual.cliente);

    for (let posicaoHistorico = 0; posicaoHistorico < chamadoAtual.historico.length; posicaoHistorico = posicaoHistorico + 1) {
      let mensagem = chamadoAtual.historico[posicaoHistorico];
      console.log("   * " + mensagem);
    }
  }
}

