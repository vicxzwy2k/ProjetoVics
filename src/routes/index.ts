import { Router, Request, Response, RequestHandler } from "express";

const router = Router()

router.get('/',(req: Request,res:Response) => {
  
   // res.render('home',{
   //     nome:'Fulano',
   //     sobreNome:'de Tal',
   //     aparecerMensagem:true
   // })
   // })
    let idade: number = 17
    let mostrarIdade: boolean = false
    if(idade >= 18){
        mostrarIdade = true
    }
   res.render('home',{
        nome:'Vitor',
         sobreNome:'Valentino',
         aparecerMensagem:true,
         mostrarIdade,
         idade,

         produtos :[
            {titulo: 'mesa', preco: 200},
            {titulo: 'xampu', preco: 15},
            {titulo: 'cadeira', preco: 50},
         ],
         frases: [
            ' Só sei que nada sei ',
            ' A vingança é plena ',
            ' Quem é essa menina de vermelho '
         ]
     })
     })

     

//quando usamos middleware, colocamos NEXT
const interferir:RequestHandler = (req,res,next) =>{
   let logged = true
   if(logged){
      next()
   }else{
      res.status(404).send("loggin nao permitido")
   }
    console.log("PASSOU PELO MIDDLEWARE")
//next significa que liberamos o middleware a pag. contato
}




router.get('/contato',interferir,(req: Request,res:Response) => {
    res.render("contato")
})

router.get('/sobre',(req: Request,res:Response) => {
    
    res.render("sobre")
})

// rota estatica
//router.get('/contato',(req: Request,res:Response) => {
  //  res.render("contato")
//})

// rota dinamica
router.get('/noticia/:slug',(req: Request,res:Response) => {
    let slug: string = req.params.slug
    res.send(`Noticia: ${slug}`)
})



router.get('/voo/:origem-:destino',(req,res) =>{
    let {origem , destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})

export default router

