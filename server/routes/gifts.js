import express from 'express'
import { getGifts, createGift, updateGift, deleteGift } from '../controllers/gifts.js'

const router = express.Router()

// GET /gifts/
router.get('/', getGifts)
router.post('/', createGift)
router.delete('/:id', deleteGift)
router.patch('/:id', updateGift)


export default router