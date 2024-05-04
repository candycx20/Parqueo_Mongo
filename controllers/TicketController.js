//importamos el Modelo
import TicketModel from "../models/TicketModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTickets = async (req, res) => {
    try {
        const tickets = await TicketModel.find()
        res.status(200).json(tickets)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Crear un registro
export const createTicket = async (req, res) => {
    try {
       await TicketModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}