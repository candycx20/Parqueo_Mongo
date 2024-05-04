import mongoose from "mongoose";
import { DOUBLE, INTEGER } from "sequelize";
const Schema = mongoose.Schema

const ticketSchema = new Schema(
    {
        total: {type:String},
        salida: {type:Date},
        correlativo: {type: String}
    },
    {collection:'tickets'}
)

export default mongoose.model('TicketModel', ticketSchema)