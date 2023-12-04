# Nome do Projeto

Um projeto back que tem o intuito de o usuário criar login, criar novos posts, realizar comentários em posts e fazer novos seguidores

## Passo a passo para executar o projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

- Certifique-se de ter o Node.js instalado em sua máquina. Caso não tenha, você pode baixá-lo [aqui](https://nodejs.org/).
- Certifique-se de ter o npm (Node Package Manager) instalado. Geralmente, ele é instalado automaticamente com o Node.js.

### Instalação

1. Faça o download do projeto ou clone o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
```

2. Navegue até o diretório do projeto:

```bash
cd nome-do-projeto
```

3. Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

### Configuração

4. Crie um arquivo `.env` na raiz do projeto e preencha as informações conforme o exemplo em `.env.example`.

5. Crie um diretório chamado `tmp` na raiz do projeto. Este diretório será usado para armazenar a base de dados SQLite.

### Migração do Banco de Dados

6. Execute o seguinte comando para realizar as migrações do banco de dados:

```bash
node ace migration:run
```

### Execução

7. Agora, para iniciar o projeto, utilize o seguinte comando:

```bash
node ace serve
```

Isso iniciará o servidor e seu projeto estará acessível em [http://localhost:3333](http://localhost:3333).

Pronto! Seu projeto está configurado e em execução localmente. Caso tenha algum problema durante o processo de instalação ou execução, verifique as mensagens de erro no console e certifique-se de seguir todos os passos corretamente.