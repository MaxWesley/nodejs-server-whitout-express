
# tasks

### Parte 1
- [x] criar endpoint de users
- [x] mudar content-type para json
- [x] mostrar no endpoint o JSON de users
- [x] tratar rotas que não existem
### Parte 2
- [x] mover regra de negócio para controllers;
- [x] criar um UserController;
- [x] mover lista de usuários para o método listUsers do UserController, passando response  e request como argumentos do método;
- [x] criar novo arquivo routes.js que exporta uma lista de rotas, com os parametros endpoint, method e handler;
- [x] mover listUsers para o handler da rota de users;
- [x] iterar array de rotas para checar a existencia;
- [x] somente executar o handle caso a rota exista, se não, retorna 404;
### Parte 3
- [x] user module 'url' para realizar um parse o request.url, para ter acesso ao query params, passando true no segundo argumento;
- [x] atribuir ao request.query o parsedUrl.query para ter acesso ao query dentro dos controller;
- [x] adicionar ordenação na lista de usuários, passando order no query param;