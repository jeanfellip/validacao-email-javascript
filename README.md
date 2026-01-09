# Validação de E-mail com JavaScript

Este projeto foi desenvolvido como trabalho prático da disciplina **Desenvolvimento em JavaScript**, do curso de **Análise e Desenvolvimento de Sistemas**. A atividade teve como foco a criação de um formulário web simples, utilizando HTML, CSS e JavaScript, com o objetivo de aplicar conceitos básicos de validação de dados no frontend.

## Objetivo do trabalho
O objetivo deste trabalho foi implementar a validação de um campo de e-mail em um formulário HTML, verificando se o valor informado segue um formato válido, além de exibir mensagens de erro ou sucesso ao usuário sem a necessidade de recarregar a página.

## Tecnologias utilizadas
- HTML
- CSS
- JavaScript

## Funcionamento da validação
A validação do campo de e-mail é realizada no lado do cliente, por meio de JavaScript. Para isso, foi utilizada uma expressão regular (Regex), responsável por verificar se o e-mail informado possui um formato válido, como a presença do caractere “@” e de um domínio.

Quando o valor informado não atende ao padrão esperado, o sistema exibe uma mensagem de erro orientando o usuário. Caso contrário, uma mensagem de validação é apresentada, indicando que o formato do e-mail é válido.

## Sobre a validação de domínio
Neste projeto, não foi implementada a verificação da existência real do domínio do e-mail informado. Esse tipo de validação exige consultas a servidores DNS, como a verificação de registros MX, o que não pode ser feito diretamente em JavaScript executado no navegador, devido a restrições de segurança.

Em aplicações reais, essa validação costuma ser realizada no backend ou complementada com o envio de e-mails de confirmação. Para os objetivos desta atividade acadêmica, optou-se por manter a validação apenas no escopo do frontend.

## Como executar o projeto
Para executar o projeto, basta abrir o arquivo `index.html` em qualquer navegador web moderno.

## Autor
Jean Fellipe Constantino Gonçalves  
Curso de Análise e Desenvolvimento de Sistemas – UNOPAR
