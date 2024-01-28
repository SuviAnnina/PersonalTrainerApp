# Personal Trainer App  
  
Tämän projektin tavoitteena oli rakentaa frontend käyttöliittymä Personal Trainer Appille käyttäen Reactia, Javascriptiä ja Vite.js kehityspalvelinta. Asiakasdatana on käytetty ns. dummy dataa.  
Komponentteina käytin mm. seuraavia: Ag-Grid, React Big Calendar, Recharts sekä Material UI-kirjasto.  
   
![alt Kuvakaappaus Personal Trainer Apin etusivusta](/.screenshots/PTApp01.png)

### Sisältö  
 
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