# App full stack

A [App full stack] sistema destinado a escolas, para cadastro e consultas de alunos.

## Instalação/Utilização

Para ter acesso à estrutura da Aplicação full stack, faça o fork e depois clone este projeto.

# Rodar a aplicação

Para rodar a aplicação é necessário executar comandos em docker-compose

```json
docker-compose up
```

Caso o database não seja importado, rode os seguintes comandos APENAS se o databse não rodar

Acessar ao diretorio do server

```json
cd backend
```

Criar o database

```json
yarn typeorm migration:run
```

# Acessar as interfaces de iteração

Acesse o UI pelo seguinte endereço

```json
http://localhost:3000
```

Acesse o playground do GraphQL pelo seguinte endereço

```json
http://localhost:4000
```

## Querys

<h3 align='center'> Buscar todos os cadastros </h3>

`query /students - para cadastro de usuários FORMATO DA REQUISIÇÃO `

```json
query{
  students {
    cpf
    name
    email
  }
}
```

Caso dê tudo certo, a resposta será assim:

`query /students - para buscar todos os cadastros FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "data": {
    "students": [
      {
        "cpf": "44422266633",
        "name": "Pierre",
        "email": "pierre@mail.com"
      }
    ]
  }
}
```

<h3 align='center'> Buscar apenas um cadastro </h3>

`query /student - para buscar apenas 1 cadastro FORMATO DA REQUISIÇÃO `

```json
query{
  student(cpf: "44422266633") {
    name
  }
}
```

Caso dê tudo certo, a resposta será assim:

`query /students - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "data": {
    "student": {
      "name": "Pierre"
    }
  }
}
```

# Mutation

<h3 align='center'> Para criar um cadastro </h3>

`mutation /createStudent - para criar um cadastro FORMATO DA REQUISIÇÃO `

```json
mutation{
  createStudent(data: {cpf: "22255577788", name: "Aldo", email: "aldo@mail.com"} ) {
    cpf
    name
    email
  }
}
```

Caso dê tudo certo, a resposta será assim:

`mutation /createStudent - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "data": {
    "createStudent": {
      "cpf": "22255577788",
      "name": "Aldo",
      "email": "aldo@mail.com"
    }
  }
}
```
