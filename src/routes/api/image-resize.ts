import express from "express"
import imgProcessed from "../../utilities/process"
import path from "path"





const resizeImage = express.Router()

resizeImage.get("/",  (req, res)=>{
    
    const filename = req.query.filename
    const width =  req.query.width 
    const height = req.query.height

    //****Check if filename is entered
    if(filename === undefined || filename === ""){
        res.status(400)
            .send("You need to specify image name")
    }
    // ****Check if the width ism  entered
    if(width === undefined || width === ""){
        res.status(400)
            .send("specify the width yoou want")
    }
     // ****Check if the width ism  entered
     if(height === undefined || height === ""){
        res.status(400)
            .send("specify the height yoou want")
    }

    const data = imgProcessed((filename as unknown) as string, Number(width), Number(height))
   
    const imageLocation = path.join(__dirname, '/../../thumb',`${data}`)
    setTimeout(()=>{
        res.sendFile(imageLocation)
    },1000)
   
    
   
})
    
   
   
 




export default resizeImage;