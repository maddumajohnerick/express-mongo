const express = require("express");
const router = express.Router();

const Genre = require("../models/genre");

router.get("/", (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err){
            throw err;
        }
        res.json(genres);
    });
});

router.post("/", (req, res) => {
    const genre = req.body;
    Genre.addGenre(genre, (err, genre) => {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

router.put("/:_id", (req, res) => {
    const id = req.params._id
    const genre = req.body;
    Genre.updateGenre(id, genre, {}, (err, genre) => {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

router.delete("/:_id", (req, res) => {
    const id = req.params._id
    Genre.removeGenre(id, (err, genre) => {
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

module.exports = router