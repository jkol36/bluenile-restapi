import { Router } from 'express'
import bluenileDiamondRouter from './bluenileDiamond'
import userRouter from './user'

let router = Router()
router.use('/user', userRouter)
router.use('/bluenileDiamonds', bluenileDiamondRouter)
export default router
