### Moment 2 - NodeJs & Gulp // Assignment 2 - NodeJs & Gulp

### Automatiserings-processens syfte
Arbetet går snabbare genom att automatisera en viss del av arbetet, på så vis kan du ha flera filer inom t.ex din CSS mapp för att enklare strukturera
under "byggandet" av webbplatsen och sedan lägga ihop dessa till en och samma när sidan publiceras. Med detta går det även att minifiera dina filer eller konvertera bilder.
Kort sagt så är syftet med automatiserings-processen att eliminera repetitiva uppgifter som annars kan ta upp tid.

### Vilka paket och verktyg som använts & varför
Det jag använt tillsammans med Gulp är följande:

- CleanCSS
Komprimerar CSS filer

- Concat
Slår ihop filer

- Livereload
Läser om sidan vid sparning av ändringar i koden

- Terser
Komprimerar JS filer

- HTMLmin
Komprimerar HTML filer

- sourceMaps
Kartlägger vart den ursprungliga koden ligger i den komprimerade filerna

### Systemet som skapats, hur man startar upp det och vilka tasks som ingår

För att köra detta krävs det att du har följande installerat:
- NPM
- gulp
- Node.js

För att det sedan skall fungera skriver du `npm install` och när det är färdigt räcker det med att skriva `gulp` så är systemet igång.
När detta gjorts så visas dina ändringar genom live servern samt komprimeras de och läggs ihop där det behövs, detta görs genom följande tasks:

- htmlTask
Denna task komprimerar HTML-filerna

- jsTask
Denna task komprimerar samt lägger ihop JavaScript-filerna

- cssTask
Denna task komprimerar samt lägger ihop CSS-filerna

- watchTask
watchTask har en watch på filerna och kör igenom de ovan vid ändringar.

Dessa tillsammans gör systemet funktionellt i sin helhet.
