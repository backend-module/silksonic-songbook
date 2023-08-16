require('dotenv').config();
const express = require('express');
const app = express();
const {Song} = require('./models')
//const path = require('path')

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//app.use('/api', require('app'))

//get all
app.get('/', async(req, res, next) => {
    try{
        const list = await Song.findAll();
        res.send(list)
    } catch (error){
        next(error)
    }
    
})


//get song by id

app.get('/:id', async (req, res, next) => {
    try {
        const song = Song.findOne({where : {id: req.params.id}});
        res.send(song);
    } catch(error){
        next(error);
    }
})


//get song by title route
app.get('/:title', async (req, res, next) => {
    try {
        const song = Song.findOne({where : {title: req.params.title}});
        res.send(song);
    } catch(error){
        next(error);
    }
})

//get songs by artist route
app.get('/:artist', async (req, res, next) => {
    try{
        const artist = Song.findAll({where: {artist: req.params.artist}})
    }
    catch(error){
        next(error);
    }
})

    //TODO: add middleware
    //create song
app.post("/", async (req, res, next) => {
    try{
        const [song, created] = await Song.findOrCreate({
            where: {title: req.body.title},
            defaults:{
                artist: req.body.artist,
                rating: req.body.rating,
                image: req.body.image
            }
        });
        if (!created){
            console.log("Song already exists!")
            res.send(song);
        }
        else if(created){
            console.log("Song has been created!")
            res.send("new item created!")
        }

    } catch(error){
        next(error)
    }
})


//TODO: add middleware
//PUT update song by id

app.put("/:id", async(req,res, next)=>{
    try{
    const song = await Song.update(req.body,{where: {id: req.params.id}
    });

    res.send("updated");
    
    }catch(error){
    
        next(error)
    }
})

//DELETE a song
app.delete("/:id", async (req, res, next) => {
    try {
      const song = await Song.destroy({ where: { id: req.params.id } });
      if (song === 0) {
        throw new Error("No item deleted");
      } else {
        res.sendStatus(200);
      }
    } catch (error) {
      next(error);
    }
  });







app.use((req, res) => {
    res.status(404).send({error: '404 - Not Found', message: "no route found for requested URL"});
});


module.exports = app