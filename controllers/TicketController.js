import TicketModel from "../models/TicketModel.js";


export const getAllTickets = async (req, res) => {
    try {
        const tickets = await TicketModel.find()
        res.status(200).json(tickets)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const createTicket = async (req, res) => {
    const estado = 0;
    try {
       await TicketModel.create(req.body)
       res.json({
            estado: 1,
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {
            estado: 2,
            message: error.message
        } )
    }
}