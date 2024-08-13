# :scissors:FSW-BARBER
Program similar to ifood aimed at the barbershop market

## :construction_worker: Structural step :construction_worker:

#### :racehorse: Features (Estudar sobre usabilidades necessárias de usuário e de sistema)
* See the barbers shop
* Access the barbers to see details
* scheduling a especific service of the barber shop
* Cancel scheduling

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
* [Neon.tech](http://neon.tech)
#### :umbrella: ORM
* Prisma

#### :briefcase: For commits in github
* using Conventional commits

## :computer: Programming step :computer:

#### :warning: tips

* Format the schema.prisma file : <span style="color:#B0B0B0">npx prisma format</span>

#### :sunny: Initial commands

1.  Creating a new app                   : <span style="color:#B0B0B0">npx  create-next-app@latest fsw-barber</span>
2.  Downloading prisma                   : <span style="color:#B0B0B0"> npm install prisma --save-dev</span>
3.  initializing prisma using postgresql : <span style="color:#B0B0B0"> npx prisma init --datasource-provider postgresql</span>
4.  edit database_url in .env file, in this project i am using neon.tech  
5. ignore in gitignore .env file
6. Create the models of schema.prisma based on the relational diagram and make connections
7. make the first migration: <span style="color:#B0B0B0"> npx prisma migrate dev --name init_db</span>
8. Firs commit using conventional commit "chore: add prisma setup"

#### :no_entry: Important steps to start a project after downloading it from GitHub for the first time
* git clone *******
* npm install
* edit .env
  





