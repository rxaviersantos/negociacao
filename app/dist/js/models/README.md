Descrição 

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
05 
- Nova maneira de declaração de array com generics
- O tipo ReadonlyArray
- O modificador readonly
- Getters vs propriedades públicas em modo de leitura
- Programação defensiva

Typescript parte 02

01
- Inspiração no React para criação de templates declarativos e dinâmicos
- Manipulação declarativa do DOM através de template
- Template dinâmico
- Formatação de datas usando Intlmanipulando 
02
- Herança com TypeScript
- Classes com tipo genérico
- Classes abstratas
- O modificador protected
03
- Visibilidade de métodos
- Validando negociações em dias úteis
- Vantagens do uso de enums
- Cuidados com enums
04
- Revisão da lógica de conversão negociações
- Método estáticos
- Parâmetros opcionais
05
- Remoção de comentários do código compilado
- Ativação do strictNullChecks
- Como suprimir erros, quando fizer sentido, resultantes do strictNullChecks
- Benefícios do strictNullChecks no controle do fluxo da sua aplicação

Typescript parte 3 

01
- Introdução e estrutura do projeto
- Requisitos não funcionais
- Decorator de método
- Logar tempo de execução com decorator
02
- Decorator com parâmetro
- Criação de um decorator de inspeção
- Ordem de execução dos decorators
- Simplicação no design de decorators
- Portabilidade de funcionalidade antiga para decorators

03 - Decorator de propriedade
- Como evitar código duplicado
- Decorator de propriedade
- Criação dinâmica de getters
- O uso de Object.defineProperty
- Cache de decorators

04 - API externa e interface 
- API externa
- Consumindo API externa
- Definindo uma interface para a API
- Isolando o acesso à API em um serviço

05 - Interfaces
- Chega de múltiplos console.log
- Aplicação prática do Polimorfismo
- Interface de método
- Evitando importar negociações duplicadas
- Estendendo interfaces
- Geração de sourmaps e debug da aplicação no navegador


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

Debugando em Typescript 

Para realizar esta ação é necessário ter o sourceMap configurado na aplicação, para isto será necessário  ir em tsconfig.json e setar esta propriiedade e coloca lá como true e salvar, logo será gerado dentro da pasta “dist > js > controllers”, um arquivo map.
Já no navegador com o console log aberto do Chrome necessário dá “Ctrl + P” e procurar a classe que deseja debugar.










