# Permana — Frontend

## Sobre o projeto

**Permana** é uma aplicação web voltada para quem coleciona e se relaciona com perfumaria. A ideia nasceu de uma dor pessoal: como amante de perfumes, senti falta de uma forma de entender minha própria coleção, o que ela diz sobre mim e o que ainda falta nela. 
O Permana ("o que permanece") é a resposta a essa necessidade, transformada em produto.
Nesta aplicação, os usuários podem criar uma conta, fazer login e, uma vez autenticados, acessar um dashboard com sua coleção de fragrâncias, navegar por categorias e visualizar informações contextuais como o clima atual que ajuda a orientar a escolha do perfume do dia.

Este repositório contém o **frontend** em React, que consome uma **API própria** (em repositório separado) e integra uma **API de terceiros** para dados de clima.

---

## Links

- **Frontend (Vercel):** https://permana-frontend.vercel.app/
- **API (Render):** https://permana-backend.onrender.com

---

## Funcionalidades

- **Cadastro de usuário** — registro com nome, e-mail e senha na API própria
- **Login com JWT** — token gerado pelo servidor e salvo no `localStorage` para persistência de sessão
- **Rotas protegidas** — usuários não autenticados são redirecionados para o login
- **Rotas anônimas** — usuários já autenticados são redirecionados para o dashboard ao tentar acessar login/registro
- **Validação de token** — ao recarregar a página, o token é verificado automaticamente para restaurar a sessão
- **Dashboard da coleção** — visualização das fragrâncias do usuário em um carrossel responsivo
- **Navegação por categorias** — exploração da coleção por ocasião, clima e ambiente
- **Clima do dia** — integração com API de terceiros que exibe a condição climática atual com base na geolocalização do usuário
- **Edição de perfil** — alteração de nome e avatar
- **Feedback visual** — toasts e telas de carregamento (skeletons) durante requisições
- **Estados de carregamento e erro** — preloaders enquanto os dados são buscados e mensagens em caso de falha

---

## Integração com API de terceiros

O projeto integra a **WeatherAPI** para exibir a condição climática atual do usuário. A requisição é feita de forma assíncrona a partir da geolocalização do navegador, e a resposta é tratada no servidor antes de chegar ao frontend, onde as condições são traduzidas para português e adaptadas ao período (dia/noite).

No frontend, um hook personalizado (`useWeather`) encapsula a lógica: solicita a localização, chama a API e gerencia os estados de carregamento e erro, exibindo uma mensagem adequada caso a requisição ou a geolocalização falhem.

Todas as requisições, tanto à API própria quanto à de terceiros, são feitas com `fetch()` nativo, sem bibliotecas externas. As chamadas ficam isoladas em um arquivo dedicado para cada funcionalidade (`utils/api.js`, `utils/auth.js`, `utils/token.js` ), e a cadeia de promessas trata erros e retorna os dados já em JSON.

---

## Tecnologias e técnicas utilizadas

- **React** — construção da interface com componentes funcionais e hooks
- **React Router DOM (v6)** — navegação com `Routes`, `Route` e `useNavigate`
- **Vite** — bundler e servidor de desenvolvimento
- **CSS / BEM** — estilização modular seguindo a metodologia BEM, com um arquivo de estilo por componente
- **Context API** — estado global distribuído em contextos dedicados (autenticação, usuário, coleção, popups e toasts)
- **Hooks personalizados** — encapsulamento de lógica reutilizável (ex.: `useWeather`)
- **Fetch API** — requisições assíncronas à API própria e à de terceiros, sem bibliotecas externas
- **ESLint** — padronização de código

### Estrutura e boas práticas

- Componentes organizados por função (páginas, componentes reutilizáveis, contextos, hooks e utilitários)
- Requisições de API isoladas em arquivo próprio
- Design responsivo adaptado para diferentes resoluções de tela
- HTML semântico e classes nomeadas segundo a especificação BEM
- Tratamento de erros com mensagens exibidas ao usuário
- Preloaders e skeletons durante o carregamento de dados

---

## Análise de segurança (frontend)

Do lado do cliente, algumas práticas de segurança foram aplicadas e outros pontos foram identificados como melhorias futuras.

### Armazenamento de sessão

O token JWT é armazenado no `localStorage` para manter a sessão entre atualizações da página. É uma abordagem simples e funcional, mas tem uma limitação: em caso de ataque XSS, o token poderia ser acessado. Uma alternativa mais segura seria armazenar o JWT em cookies com as opções `HttpOnly` e `SameSite`.

### Controle de acesso no cliente

As rotas privadas são protegidas pelo componente `ProtectedRoute`, que redireciona usuários não autenticados para o login e impede que usuários já logados acessem as telas de login e cadastro. Vale reforçar que essa proteção é de experiência de navegação, a autorização real acontece no servidor, que valida o token em cada requisição protegida.

### Validação e proteção contra XSS

Os formulários têm validação no cliente (campos obrigatórios, comprimento e formato), o que melhora a experiência, embora a validação que garante a integridade dos dados seja sempre a do servidor. O projeto não usa `innerHTML` nem insere HTML fornecido pelo usuário diretamente na página, o que reduz os riscos de Cross-Site Scripting.

### Melhorias futuras

- Armazenar o JWT em cookies `HttpOnly` em vez de `localStorage`
- Implementar uma Content Security Policy (CSP)
- Monitorar dependências regularmente com `npm audit`

---

## Autor

Rafael Guanciale Nacarato
