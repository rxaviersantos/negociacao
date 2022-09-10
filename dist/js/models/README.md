Esse arquivo "README.md" pode ser deletado.

- Uma negociação não pode ser modificada depois de criada.
- Obrigatotiamente tem uma data, quantidade e valor.
- Seu volume é calculado multiplicando-se a quantidade negociada 
no dia pelo valor negociado.

Nessa aplicação, quando eu clicar em incluir ela tem que conseguir pegar a data que o usuário incluiu, a quantidade, o valor e criar uma instância de negociação.

nesta aplicação foram abordados os seguintes conceitos:
- Introdução ao projeto e sua estrutura
- Módulos do ECMASCRIPT
- Modelagem de uma Negociação em Javascript
- Buracos em nossa modelagem por limitações da linguagem Javascript
- Download do TypeScript
- Configuração do compilador e papel do tsconfig.json
- Integração com scripts do Node.js
03
- Modificadores de acesso private e public
- Benefícios iniciais da linguagem TypeScript
- O tipo implícito any
- Benefícios da tipagem estática
- Mais configurações do compilador tsc
- Retorno de método explícito
- Conversão de valores da interface do usuário
04
- Modelagem da classe Negociacoes
- Utilização de Generics
- Revisão sobre encapsulamento
- Questões de mutabilidade e como solucioná-la
- O tipo Readonly
- Adição de negociações em nossa lista



- Em tsconfig -> noEmitOnError: Se o arquivo de Typescript que eu estou salvando tiver um problema de copilção
não irá gerar um arquivo JS para este cara, nehum arquivo js será gerado.

* Em package.json 

    - Script start: "npm run watch"/ "npm run server" - Executando o copilador do typescript
    comando Watch
        Qualquer modifição no arquivo TS o copilador vai escutar e gravar na pasta DIST
    Comando Server
        Qualquer modificação feita na pasta DIST ele fará o refresh no navegador 
         Assim alterando em um único lugar todo o pipeline será excutado e o resultado final será refletido no navegador 

    - Script compile: transformar os arquivos Typescript em Javascript dentro da devida pasta.
    por isto foi criado Wacth

    - Script Wacth: Irá chamar o copilador Typescript com parâmetro -w,
    o copilador Typescript ficará monitorando os arquivos.

* Em app.ts ao declarar arquivos typescript, pode ser gerado várias chegagem no código;
    - Uma das chegagem se omite um parametro no construtor da classe será indicado que tem um erro
    - Permite ter o auto complete mais apurado, isso significa que quando eu clico .data eu consigo ter esse auto complete das propriedades da minha classe.












