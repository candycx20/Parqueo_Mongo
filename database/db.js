import mongoose from 'mongoose'
const url = 'mongodb+srv://candycarrillo060:u3Pdc9crUlT4A7C7@cluster0.y3mcsy8.mongodb.net/parqueo'
mongoose.connect(url)

const db = mongoose.connection
db.on('open', ()=>{console.log("¡Conectado a MOngoDB!")})
db.on('error', ()=>{console.log("¡Error al conectar a MongoDB!")})
export default db