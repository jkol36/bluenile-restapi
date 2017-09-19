import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

router.route('/')
  .get((req, res) => {
    mongoose
    .model('bluenileDiamond')
    .find({})
    .then(diamonds => res.json(diamonds))
    .catch(err => res.send(err))
  })


export default router