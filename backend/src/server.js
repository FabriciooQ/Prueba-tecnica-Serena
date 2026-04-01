import express, { urlencoded } from "express"
import path from "path"
import { fileURLToPath } from "url"
import psicologoRouter from "./routes/psicologos.route.js"
import sessionRouter from "./routes/sessions.route.js"
import cors from "cors"
import empleadoRouter from "./routes/empleados.route.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express()

//para permitir solicitudes de otro dominio
app.use(cors()) 
app.use("/psychologists", psicologoRouter)
app.use("/sessions", sessionRouter)
app.use("/empleado", empleadoRouter)

app.use((req, res)=>{
    res.status(404). send("No se encontro la pagina")
})


app.listen(3000)

console.log("server listen on port 3000")

/* app.get('/', (req, res) => {
         res.sendFile('./static/index.html',{
        root:__dirname
        }) 
        //reponde sin informacion
        res.end('Heloo world')
        //responde al navegador con mas informacion, dice que es un string
        
       res.send('Hello world')
    } )

app.get('/isAlive', (req, res) => {
         res.sendFile('./static/index.html',{
        root:__dirname
        }) 
        //reponde sin informacion
        res.end('Heloo world')
        //responde al navegador con mas informacion, dice que es un string
        
       //para enviar respuesta de un estado solamente
       res.sendStatus(200)
    } )

    app.get('/json', (req, res) => {
    //para devolver un json simplemente
    let p = new Psicologo(1, "Celina", "Trauma", true)
    p.generarAgendaDeTurnos()
       res.json({
        psicologo:JSON.stringify(p)
       })
    } )
    
    //para recibir un json con un post necesitamos antes un middleware para que express transforme el body en la req que usa el requestHandlerFunction de app.post
    app.use(express.json());    //para json
    //app.use(express.text())     //para texto
    //app.use(express.urlencoded({extended:false}))     //para forms datas
    app.post('/post',(req, res) =>{
        console.log(req)
        res.status(200).send("post creado")
    })

 */
    //use declara un middleware que se peude ejecuta antes de las rutas declarando siempre next() al final para que pase al sigueinte get, en este caso como hay un send no lo haria
    //y como esta al ultimo se ejecuta si no se encontro ninguna coincidencia con otro get