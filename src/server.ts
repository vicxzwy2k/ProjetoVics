//importando o express
import express, {Request, Response} from 'express'
import {Server} from 'http'
import path from 'path'

//importando o arquivo index.ts das rotas
import mainRoutes from './routes/index'

//importando template engine(para usar HTML)
import mustache from 'mustache-express'


//usando express
const server = express()

//configurando o Mustache
server.set('view engine','mustache')

//configurando o caminho da pasta viwes
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())


//configuração da pasta public
server.use(express.static(path.join(__dirname,'../public')))


//inserindo a rota no servidor
server.use(mainRoutes)

//pagina nao encontrada
server.use((req:Request,res:Response) =>{
    res.status(404).send("Página não encontrada")
})



//gerar o servidor na porta 3000
server.listen(2000)