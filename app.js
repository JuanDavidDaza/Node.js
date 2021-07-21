const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.send("Mi respuesta desde express v.3");
});

app.get("/servicios", (req, res) => {
  res.send("Estás en la pagina de servicios");
});
app.use((req, res, next) => {
    res.status(404).sendfile(__dirname + "/public/404.html");
  });
app.listen(port, () => {
  console.log("servidor a su servicio en el puerto", port);
});
