const express = require('express')
const router = express.Router()

const Movie = require('../models/movie')


router.get('/', async(req,res) => {
    try{
           const movies = await Movie.find()
           res.json(movies)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const movie = await Movie.findById(req.params.id)
           res.json(movie)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const movie = new Movie({
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary
    })

    try{
        const m1 =  await movie.save() 
        res.json(m1)
    }catch(err){
        res.send('Error')
        console.log(err)
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const id = req.params.id
        const update = req.body

              
        const m1 = await Movie.findByIdAndUpdate(id,update)
        res.json(m1)   
    }catch(err){
        res.send('Error')
    }

})

router.delete('/:id',async(req,res)=> {
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id) 
        res.json(movie)   
    }catch(err){
        res.send('Error')
    }

})
module.exports = router
