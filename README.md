For English, scroll down. Screenshots of the App available at the end of the page.  
  
# Personal Trainer App  
  
Tämän projektin tavoitteena oli rakentaa frontend käyttöliittymä Personal Trainer Appille käyttäen Reactia, Javascriptiä ja Vite.js kehityspalvelinta. Asiakasdatana on käytetty ns. dummy dataa.  
Komponentteina käytin mm. seuraavia: Ag-Grid, React Big Calendar, Recharts sekä Material UI-kirjasto.  
   
![alt Kuvakaappaus Personal Trainer Apin etusivusta](/.screenshots/PTApp01.png)

## Sisältö  
 
- Customer-välilehti  
  - Asiakasdatan tarkastelu ja muokkaus.  
  - Create, Read, Update, Delete-toiminnot asiakkaalle.  
  - Uuden treenin lisääminen asiakkaalle.   
  - CSV-tiedoston lataaminen asiakastiedoista erilliselle Excel-tiedostolle.  
  - Ag-grid-komponentti.   
- Training-välilehti  
  - Listaa asiakkaille linkitetyt treenit.  
  - Read ja Delete-toiminnot treeneille.  
- Calendar-välilehti  
  - Kalenterikomponentti listaa asiakkaat ja treenit kalenteriin, jota voi tarkastella kuukausi-, viikko- tai päivätasolla. Kalenterista voi tarkastella myös viikon agendaa, johon on kerätty päivämäärä, treenin ajankohta sekä asiakkaan nimi ja treenimuoto.  
  - React Big Calendar-komponentti.   
- Training chart-välilehti  
  - Pylväsdiagrammi joka on koostettu treenidatasta.  
  - Recharts-komponentti.  

## Haluatko asentaa projektin omalle koneellesi?  
1. Kloonaa repositorio Git clonella  
>   git clone https://github.com/SuviAnnina/PersonalTrainerApp.git  
2. Siirry juurihakemistoon   
>   cd PersonalTrainerApp  
3. (Ennakkovaatimus) Asenna node.js  
>   https://nodejs.org/en/learn/getting-started/how-to-install-nodejs  
4. Asenna riippuvuudet  
>   npm install  
5. Käynnistä serveri, localhost   
>   npm run dev  

# Personal Trainer App  
The goal of this project was to build the frontend user interface for the Personal Trainer App using React, JavaScript, and the Vite.js development server. Dummy data was used as the client data.   
   
I used the following components; Ag-Grid, React Big Calendar, Recharts, and the Material UI library.  

![alt Kuvakaappaus Personal Trainer Apin etusivusta](/.screenshots/PTApp01.png)  
  
## Content  
- Customer tab  
    - Review and edit customer data.  
    - Create, Read, Update, Delete operations for customers.  
    - Add a new training for a customer.  
    - Download customer data to a separate Excel file in CSV format.  
    - Ag-Grid component.  
- Training tab  
    - Lists workouts linked to customers.  
    - Read and Delete operations for workouts.  
- Calendar tab  
    - Calendar component lists customers and workouts, which can be viewed on a monthly, weekly, or daily basis. The calendar also allows viewing a weekly agenda, which includes the date, workout time, customer name, and workout type.  
    - React Big Calendar component.  
- Training Chart tab  
    - Bar chart compiled from workout data.  
    - Recharts component.  

## Want to run this project on your computer?  
  
1. Clone the repository with Git clone   
>   git clone https://github.com/SuviAnnina/PersonalTrainerApp.git  
2. Move to the root directory  
>   cd PersonalTrainerApp  
3. (Prerequisite) Install node.js  
>   https://nodejs.org/en/learn/getting-started/how-to-install-nodejs  
4. Install dependencies  
>   npm install  
5. Run server on localhost   
>   npm run dev  

![alt Kuvakaappaus Personal Trainer Appista](/.screenshots/PTApp02.png)   
![alt Kuvakaappaus Personal Trainer Appista](/.screenshots/PTApp03.png)  
![alt Kuvakaappaus Personal Trainer Appista](/.screenshots/PTApp04.png)  
![alt Kuvakaappaus Personal Trainer Appista](/.screenshots/PTA05.png)  
![alt Kuvakaappaus Personal Trainer Appista](/.screenshots/PTApp06.png)  
  
 