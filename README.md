# :scissors:FSW-BARBER

Program similar to ifood aimed at the barbershop market

## :construction_worker: Structural step :construction_worker:

#### :racehorse: Features (Estudar sobre usabilidades necessárias de usuário e de sistema)

- See the barbers shop
- Access the barbers to see details
- scheduling a especific service of the barber shop
- Cancel scheduling

#### :file_folder: Relational diagram

<table border="0">
 <tr>
    <td><b style="font-size:20px">User</b></td>
    <td><b style="font-size:20px">Barbershop</b></td>
    <td><b style="font-size:20px">Service</b></td>
    <td><b style="font-size:20px">Booking</b></td>
 </tr>
 <tr>
    <td style="font-size:12px">ID (PK)</td>
    <td style="font-size:12px">ID (PK)</td>
    <td style="font-size:12px">ID (PK)</td>
    <td style="font-size:12px">ID (PK)</td>
 </tr>
 <tr>
    <td style="font-size:12px">Name</td>
    <td style="font-size:12px">Name</td>
    <td style="font-size:12px">Barbershop ID (FK)</td>
    <td style="font-size:12px">Service ID (FK)</td>
 </tr>
 <tr>
    <td style="font-size:12px">Email</td>
    <td style="font-size:12px">Description</td>
    <td style="font-size:12px">Name</td>
    <td style="font-size:12px">User ID (FK)</td>
 </tr>
 <tr>
    <td style="font-size:12px"></td>
    <td style="font-size:12px">Address</td>
    <td style="font-size:12px">Description</td>
    <td style="font-size:12px">Date</td>
 </tr>
 <tr>
    <td style="font-size:12px"></td>
    <td style="font-size:12px">Image URL</td>
    <td style="font-size:12px">Image URL</td>
    <td style="font-size:12px"></td>
 </tr>
 <tr>
    <td style="font-size:12px"></td>
    <td style="font-size:12px">Phones</td>
    <td style="font-size:12px">Price</td>
    <td style="font-size:12px"></td>
 </tr>
</table>

#### :eyes: Figma project

* [Visit Ui design](https://www.figma.com/design/HykQMt0ZNdfCKhVCTYpxf9/FSW-5.0-%5BLive%5D-(Copy)?node-id=0-1&t=m1fSzQCDszvpNm3W-0)

#### :globe_with_meridians: Database host location

- [Neon.tech](http://neon.tech)

#### :umbrella: ORM

- Prisma

#### :closed_lock_with_key: Authentication method

- NextAuth.js

#### :nail_care: CSS framework

- Tailwind

#### :briefcase: For commits in github

- using Conventional commits

___
## :computer: Programming step :computer:

##### :art: Summary color

- <span style="color:#FC6A53">#FC6A53 Terminal execution</span>
- <span style="color:#5396FC">#5396FC Default code inside a file</span>
- <span style="color:#FCCE53">#FCCE53 Git codes</span>
- <span style="color:#74FA5F">#74FA5F New files</span>

##### :no_entry: *Important steps to start a project after downloading it from GitHub for the first time only*

- `git clone ****`
- npm install
- edit .env

##### :warning: *If it's necessary to update the data, provided you already have the project, use the command below. Make sure to push your updates before pulling the new ones.*
* <span style="color:#FCCE53">`git pull origin main`</span>

##### :flashlight: Extensions

- Tailwind css
- Prettier - Code formatter
- Simple React Snippets

##### :grey_question: tips

- Format the schema.prisma file : <span style="color:#FC6A53">npx prisma format</span>
- Run the application : <span style="color:#FC6A53">npm run dev</span>
- Open the database with prisma : <span style="color:#FC6A53">npx prisma studio</span>

#### :sunny: Initial commands

1.  Creating a new app : <span style="color:#FC6A53">npx create-next-app@latest fsw-barber</span>
2.  Downloading prisma : <span style="color:#FC6A53"> npm install prisma --save-dev</span>
3.  initializing prisma using postgresql : <span style="color:#FC6A53"> npx prisma init --datasource-provider postgresql</span>
4.  edit database_url in .env file, in this project i am using neon.tech
5.  ignore in gitignore .env file
6.  Create the models of schema.prisma based on the relational diagram and make connections
7.  make the first migration: <span style="color:#FC6A53"> npx prisma migrate dev --name init_db</span>
8.  Add the new folders and files:<span style="color:#FCCE53">git add .</span>
9.  git commit -m "chore: add prisma setup"<span style="color:#FCCE53">git commit -m "chore: add prisma setup"</span>

#### :new_moon: *How to populate your database with mock data:*

1. Add a seed.ts file to the Prisma folder to populate the database; this will make coding easier.
2. Inside of package.json, below the script, insert this command: <span style="color:#5396FC">`"prisma": {"seed": "ts-node prisma/seed.ts"}`</span>
3. Before running the previous script, you need to install 'ts-node': <span style="color:#FC6A53"> npm install -D ts-node</span>
4. Finally, populate the database: <span style="color:#FC6A53">npx prisma db seed</span>
5. do the commit:<span style="color:#FCCE53">git commit -m "chore: seeding the database""</span>

#### :nail_care: *How to configue the tailwind css for better experience*

1. install the plugin that help you organize your css code: <span style="color:#FC6A53">npm install -D prettier prettier-plugin-tailwindcss</span>
2. create a new file in roots : <span style="color:#74FA5F">.prettierrc.json</span>
3. paste inside the file : <span style="color:#5396FC">`{"plugins":["prettier-plugin-tailwindcss"],"tabWidth":2,"semi": false}`</span>
4. Verify if the extension Prettier - Code formatter is installed
5. Inside of the VS-CODE, press "CTRL + ," and seach for default formatter and select Prettier - Code formatter
6. Create a file named .prettierignore and add *.md inside him to prettier ignore the type of file
7. Finally, search for "Format on Save" and verify if the box is selected
8. For more information, [visit here](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

#### :ledger: *A library that facilitates the creation of components.*
  The [**shadcn/ui**](https://ui.shadcn.com/docs/installation/next) library offers a collection of ready-to-use React components, helpful for accelerating interface development.
  1. install the library :  <span style="color:#FC6A53">`npx shadcn-ui@latest init`</span>
  2. if you want to install a editable component, just consult the documentation

#### :two_men_holding_hands:  How to avoid making too many database connections every time the application is re-rendered: 

* lib/prisma.ts | you need to get the code and paste there

##### :fireworks: * Allowing images to be sent from the server to Next.js: * 
* In the next.config.mjs file, you will need to add the following command:
` images: {
  remotePatterns: [
    {
      hostname: "utfs.io",
    },
  ],
},  
`
#### :closed_lock_with_key: *How to install NextAuth authentication (V4)*

* Install on Terminal : npm install next-auth
* Create a folder inside /app/api/auth/[...nextauth]/route.ts and make the necessary modifications -> [Next Auth](https://next-auth.js.org/getting-started/example)
* Since we are using Prisma, we need to connect NextAuth to Prisma in Order to enable interaction between them. [Adapters](https://next-auth.js.org/adapters)
* Install it : npm install @auth/prisma-adapter
* After adding the prisma adapter in route.ts, you need to update the schema.prisma by pasting the following [CODE](https://authjs.dev/getting-started/adapters/prisma?_gl=1*syh39y*_gcl_au*MTM5OTAzNjcyNC4xNzI4NDc2MDQ1). This code represents a new schema that connects with the previously created schema.
* to format : npx prisma format 
* to make migration : npx prisma migrate dev --name add_auth_tables
* to verify : npx prisma studio
* Visit google developer console
* You need to see a video for more details

## :books: Learnings :books:

#### Simple React Snippets
<p style="font-size:12px">SFC - Cria um component básico</p>

#### Concepts


##### SHADCN

<p style="font-size:12px">Usar o Forms do SHADCN, evita que a página fica renderizando a todo momento que digita uma letra nova. Evita processamento sem necessidade</p>

##### Next

<p style="font-size:12px"> Semanticamente, não é correto renderizar o "a" tag dentro de um botão. Para solucionar esse problema, no botão, use o camndo  "asChild" para transformar o próprio botão no "a" tag. Isso acontece quando colocamos uma tag "Button" e dentro dela, "Link".
</p>

<p style="font-size:12px"> Quando você adiciona onClick no arquivo, ele precisa do javascript para funcionar, o lado do cliente. Para isso, eu preciso que esse arquivo seja do tipo cliente adicionando no inicio dele "use cliente"
O que nos dá outro problema, quando você utiliza o use client, você deixa de ter a conexão com o servidor e a
maioria das páginas são dinâmicas, o que fazer? Nesse momento, O ideal é pegar a parte que é comunicável com o usuário
(Clicar no botão e copiar o número de telefone da barbearia) e  criar um novo arquivo para ele. phoneItem.tsx</p>

<p style="font-size:12px"> No tópico de fireworks (how to send image from server to next...), o comando é necessário para promover otimização, segurança e controle de origem, ao colocar aquele comando, estou primitindo que imagens hospedadas no domínio específico (utfs.io) possam ser carregadas no NEXT. Ao observar no banco de dados, todas as imagens veem do site utfs.io, então, precisar adaptar ao seu projeto.
</p>

<p style="font-size:12px"> Apenas server components podem ser assincronos.</p>

<p style="font-size:12px"> Por padrão, todo arquivo do next é um SERVER COMPONENT, ou seja, não aceita interatividade com o usuário. Para uma interatividade, você precisa de javascript, manipulação de Dom. Nesse caso, você precisará adicionar "use client" no início do file. Dessa forma, ele ainda é parcialmente renderizado no lado do servidor.</p>

##### Library Husky

<p style="font-size:12px">Quando você está programando com outras pessoas, é importante formatar o código antes de enviar para o git e vamos dizer que essa pessoa não use as bibliotecas ou extensões mencionadas, ao usar o husky (npm install -husky lint-staged), execute o código com (npx husky init), ele cria para você uma pasta com o nome de husky e dentro dela, há um arquivo chamado pre-commit, ele executa comandos antes de efetuar um commit e o commit só é completado se esses comandos forem executados com sucesso. Dentro do pré-commit, digite npx lint-staged </p>
<p style="font-size:12px">Agora, você precisa criar um arquivo com o nome de .lintstagedrc.json e dentro dele colocar esse script {"*.ts?(x)": ["eslint --fix", "prettier --write"]},isso serve para que eslint apenas execute em arquivos específicos, no caso, arquivos que terminam em .ts e tsx</p>

##### Prisma

<p style="font-size:12px"> O prisma já se integra ao Typescript, o que nos permite já puxar
a tipagem do banco de dados criado pelo schema.prisma caso seja necessário, no arquivo barbershopItem.tsx, ao realizar a tipagem com interface BarbershopItemProps{barbershop:Barbershop}, já estamos pasando todos os itens necessários para cria-la quando importamos do prisma o próprio banco de dados: import {Barbershop} from "@prisma/client"</p>

##### App
<p style="font-size:12px"> Toda pasta criada dentro de App, vira uma rota na aplicação.</p>
<p style="font-size:12px"> Para ignorar uma pasta criada para que o sistema de rotas do next, não pegue ela, use _tanana.</p>
<p style="font-size:12px"> Quando você cria um file com o nome de page.tsx, o next entende como uma página e se ela está na raíz, dentro do app, junto ao Layout, ele vira a página inicial (desde que só tenha uma)</p>

##### App/global.css
<p style="font-size:12px">O globals.css é criado para armazenar as cores que serão usadas no projeto</p>

##### App/Layout
<p style="font-size:12px"> Tudo que você coloca no layout vai para todas as páginas da aplicação.</p>


##### lib/Prisma.ts
<p style="font-size:12px">Sempre que você compila/salva sua aplicação, se não existir esse arquivo, o servidor fica abrindo novas conexões com o banco de dados. Esse comando impede que isso aconteça. Se já existe uma, ele apaga e começa novamente.</p>


##### Public

<p style="font-size:12px">A pasta public é destinada para salvar arquivos estáticos, como logos,fonts,fotos... por exemplo</p>
                                                       