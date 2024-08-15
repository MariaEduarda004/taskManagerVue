# Gerenciador de Tarefas

Este projeto é um gerenciador de tarefas simples desenvolvido com Vue.js, simulando uma comunicação com uma API mock. Ele inclui funcionalidades de login, registro, adição, remoção e conclusão de tarefas. Foi criado para atender aos requisitos do trabalho da disciplina de Frameworks de Desenvolvimento Front-end.

## Funcionalidades

- **Login**: Usuários podem se autenticar usando e-mail e senha.
- ***Credenciais mocadas para teste de acesso:*** email: 'teste@gmail.com', password: 'teste'
- **Registro**: Novos usuários podem se registrar.
- **Gerenciamento de Tarefas**:
  - Adicionar tarefas.
  - Marcar tarefas como concluídas.
  - Remover tarefas.
  - Visualizar informações adicionais sobre as tarefas, como data de criação e prazo final.

## Estrutura do Projeto

- **Vue.js**: Framework JavaScript utilizado para construir a interface do usuário.
- **Font Awesome**: Biblioteca de ícones utilizada para indicar a conclusão das tarefas.
- **Mock API**: Simula uma API para gerenciar usuários e tarefas no "banco de dados".

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)

## Instalação

1. **Clone o repositório:**

   ```
   git clone https://github.com/MariaEduarda004/taskManagerVue.git
   cd taskManagerVue

2. **Instale as dependências:**

   ```
   npm install

3. **Execute o projeto:**

   ```
   npm run dev
4. **Acesse a aplicação:**

Abra seu navegador e vá para http://localhost:8080.

## Estrutura de Arquivos
- **src/:** Contém todos os arquivos de código fonte do projeto.
- **components/:** Componentes Vue reutilizáveis, como o formulário de registro.
- **views/:** Páginas principais da aplicação, como a tela de login, registro e gerenciador de tarefas.
- **mockApi.js:** Simula a API para gerenciar usuários e tarefas.
- **utils.js:** Contém funções utilitárias, como formatação de datas.
## Uso
- **Registro:** Acesse a tela de registro para criar uma nova conta.
- **Login:** Use as credenciais registradas para acessar a aplicação.
- **Gerenciamento de Tarefas:**
Adicione uma nova tarefa inserindo um nome e selecionando uma data de prazo.
Marque tarefas como concluídas clicando no botão "Concluir".
Remova tarefas indesejadas clicando no botão "Remover".
Visualize a data de criação e o prazo final de cada tarefa.
- **Mock API:**
A mockApi.js simula uma API para o gerenciamento de usuários e tarefas. Os dados são armazenados em arrays no código, sem persistência em banco de dados.

## Endpoints Simulados
- **login(email, password):** Autentica o usuário.
- **register(name, email, password):** Registra um novo usuário.
- **getTasks(userId):** Retorna as tarefas associadas a um usuário específico.
- **addTask(userId, task):** Adiciona uma nova tarefa para o usuário.
- **removeTask(taskId):** Remove uma tarefa específica.
- **completeTask(taskId):** Marca uma tarefa como concluída.
## Tecnologias Utilizadas
- **Vue.js:** Framework JavaScript para construção de interfaces.
- **Bootstrap:** Framework CSS para estilização rápida.
- **Font Awesome:** Biblioteca de ícones para a interface.
