const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", require("./routes"));
app.use("/ttech", require("./routes"));

app.listen(port,()=>{
    console.log(`Test server running on port: ${port}`);
});