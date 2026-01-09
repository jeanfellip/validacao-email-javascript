# Validação de Campo de E-mail com JavaScript

Este projeto foi desenvolvido como atividade prática da disciplina **Desenvolvimento em JavaScript**, do curso superior de **Análise e Desenvolvimento de Sistemas**, com o objetivo de aplicar conceitos fundamentais de validação de dados em formulários web.

## 🎯 Objetivo do Trabalho
O principal objetivo da atividade foi implementar um formulário HTML contendo um campo de e-mail, realizando sua validação por meio da linguagem JavaScript, sem a necessidade de recarregamento da página, proporcionando uma melhor experiência ao usuário.

## 🛠️ Tecnologias Utilizadas
- HTML5  
- CSS3  
- JavaScript  

## ⚙️ Funcionamento da Validação
A validação do e-mail ocorre em duas etapas:

1. **Validação de formato**  
   Utiliza expressões regulares (Regex) para verificar se o valor informado segue o padrão esperado de um endereço de e-mail, garantindo a presença de elementos essenciais como o caractere “@” e o domínio.

2. **Validação de domínio por lista conhecida**  
   Após a validação do formato, o domínio do e-mail é comparado com uma lista de provedores de e-mail comumente utilizados, como `gmail.com`, `outlook.com` e `yahoo.com`. Essa abordagem reduz a aceitação de domínios claramente inválidos ou digitados incorretamente.

## ❗ Por que não há validação real de domínio?
A verificação da existência real de um domínio de e-mail exige consultas a registros DNS, como os registros MX (Mail Exchange). No entanto, esse tipo de consulta **não pode ser realizado diretamente em JavaScript executado no navegador**, devido a restrições de segurança impostas pelos próprios navegadores.

Em aplicações reais, essa validação é normalmente realizada no **backend**, utilizando linguagens e serviços capazes de consultar servidores DNS, podendo ainda ser complementada com o envio de e-mails de confirmação para garantir a autenticidade do endereço informado.

Dessa forma, a validação implementada neste projeto limita-se ao escopo do frontend, atendendo aos objetivos propostos pela atividade acadêmica.

## ▶️ Como Executar o Projeto
1. Faça o download ou clone este repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Insira um endereço de e-mail e clique em **Validar**

## 👨‍🎓 Autor
Jean Fellipe Constantino Gonçalves  
Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas – UNOPAR
