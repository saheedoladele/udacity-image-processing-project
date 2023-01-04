import express from "express"
import path from "path"
import routes from "./routes"

const app = express()
const port = 3001

app.set("views", path.join(__dirname, "views"))
app.set("view engine","ejs")
app.use("/api", routes)

app.use('images', express.static('images'))

app.listen(port, () =>{
    console.log(`Server is runing on the port:${port}, visit http://localhost:${port} to test the server`);
    
})

export default app




