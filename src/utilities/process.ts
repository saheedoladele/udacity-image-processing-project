
import fs from 'fs'
import path from 'path'
import { promises as fsPromises} from 'fs'
import sharp from 'sharp'


const writeData = async (path: string, filename:any) => {
    const myFile = await fsPromises.open(path, 'a+');
    return await myFile.write(filename);
  }

const imgProcessed = (fileName: string, width: number, height:number) =>{
   
    fs.readFile(path.join(__dirname, '/../../images',`${fileName}.jpg`), (err, data)=>{
        if(err) throw err
      
        sharp(data)
        .resize(width, height, {
            kernel: sharp.kernel.nearest,
            fit: 'cover',
            position: 'center',
        })
         
        .toBuffer()
        .then((data) => {
             writeData(path.join(__dirname,'/../../build/thumb/')+`${fileName}_${width}_${height}.jpg`, data)
        });
    })
   
return `${fileName}_${width}_${height}.jpg`
}


process.on('uncaughtException', err =>{
    console.error(`There is an error: ${err}`)
    process.exit(1)
}
)

export default imgProcessed

