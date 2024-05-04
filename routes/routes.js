import express from 'express'
import { getAllTickets, createTicket } from '../controllers/TicketController.js'
const router = express.Router()

router.get('/', getAllTickets)
router.post('/', createTicket)

export default router
