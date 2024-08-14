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

#### :globe_with_meridians: Database host location

- [Neon.tech](http://neon.tech)

#### :umbrella: ORM

- Prisma

#### :nail_care: CSS framework

- Tailwind

#### :briefcase: For commits in github

- using Conventional commits

## :computer: Programming step :computer:

#### :art: _Summary color_

- <span style="color:#FC6A53">#FC6A53 Terminal execution</span>
- <span style="color:#5396FC">`#5396FC Default code inside a file`</span>
- <span style="color:#FCCE53">#FCCE53 Git codes</span>
- <span style="color:#74FA5F">#74FA5F New files</span>

#### :flashlight: _Extensions_

- Tailwind css

#### :warning: _tips_

- Format the schema.prisma file : <span style="color:#FC6A53">npx prisma format</span>
- Run the application : <span style="color:#FC6A53">npm run dev</span>

#### :sunny: _Initial commands_

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

#### :no_entry: *Important steps to start a project after downloading it from GitHub for the first time*

- git clone ****
- npm install
- edit .env

---

## :books: Learnings :books:

<p style="font-size:12px"> Tudo que você coloca no layout vai para todas as páginas da aplicação.</p>
<p style="font-size:12px"> Toda pasta criada dentro de App, vira uma rota na aplicação.</p>
<p style="font-size:12px"> Quando você cria um file com o nome de page.tsx, o next entende como uma página e se ela está na raíz, dentro do app, junto ao Layout, ele vira a página inicial (desde que só tenha uma)</p>
<p style="font-size:12px"> Por padrão, todo arquivo do next é um SERVER COMPONENT, ou seja, não aceita interatividade com o usuário. Para uma interatividade, você precisa de javascript, manipulação de Dom. Nesse caso, você precisará adicionar "use client" no início do file. Dessa forma, ele ainda é parcialmente renderizado no lado do servidor.</p>
