import express from "express"
import resizeImage from "./api/image-resize";


const routes = express.Router();
routes.get("/", (req, res)=>{
    res.render("index")
})

routes.use("/images", resizeImage)
routes.use("/images?filename=&width=&height=", resizeImage)


export default routes