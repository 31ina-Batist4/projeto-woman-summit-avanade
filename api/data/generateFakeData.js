const fs = require("fs");
const numTables = Math.floor(Math.random () * 20) + 16;

let fakeTables = [];
for (i = 1; i < numTables; i++) {
    const chairs = Math.floor(Math.random * 20)+ 2;
    const name = `Table ${i}`;
    const location = ["Fortaleza","Porto Alegre","Salvador","Confins",
        "Recife","Congonhas","Campinas","Curitiba", "Brasília","Guarulhos" ]
        //[Math.floor(Math.random() * 10)];
    fakeTables.push({
        name: name,
        capacity: chairs,
        isAvailable: availability,
        location: location
    });
}
let data = JSON.stringify({
    tables: fakeTables
})
fs.writeFileSync(__dirname + "./allTables.json",data);