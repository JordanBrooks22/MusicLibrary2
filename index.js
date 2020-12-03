"use strict"

function musicRequest(){
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/api/music",
        dataType: "json",
        type: "GET",
        sucess: function(result) {
            dataDisplay(result);
        }
    });
}
musicRequest();

function dataDisplay(data){
    console.log(data);
    for(let i = 0; i < data.length; i++){
        console.log(data[i].title)
        $("#musicBody").append(
           " <tr> " +
                   " <td>"+data[i].id+"</td>" + 
                   " <td>"+data[i].title+"</td>" + 
                   " <td>"+data[i].album+"</td>" +
                   " <td>"+data[i].artist+"</td>" + 
                   " <td>"+data[i].genre+"</td>" + 
                   " <td>"+data[i].releaseDate+"</td>" + 
                " </tr>"
        );
    }
}
function getAllSongs() {
    $(document).ready(function () { //function available after the document is loaded:
        $.ajax({
            url: 'http:localhost:3000/api/songs',
            dataType: "json",
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $('.table-body').html(''); //empties table
                $.each(data, function (index, song) { //.each ~loop for jQuery for each object, return key value pair
                    $('.table-body').append(
                        "<tr class='table-items' id='"song_+ song.id + "'>" +
                        "<td>" + song.id + "</td>" +
                        "<td>" + song.title + "</td>" +
                        "<td>" + song.album + "</td>" +
                        "<td>" + song.releaseDate + "</td>"
                        "</tr>"
                    );
                });
            }
        })
    });
}
id= "song_ + song.id + "



var cors = require("cors");
const validators = require("./validators/custom-validations.js");
const repoContext = require("./repository/repository-wrapper.js");
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));

app.listen(3000, function () {
    console.log('Server started. Listening on port 3000.');
});
app.get("/api/movies", (req, res) => {
    let movies = repoContext.movies.findAllMovies();
    res.send(movies);
});
app.get("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let movies = repoContext.movies.findMovieById(id);
    res.send(movies);
});

app.post("/api/movies", (req, res) => {
    let newMovie = req.body;
    let addedMovie = repoContext.movies.createMovie(newMovie);
    res.send(addedMovie);
});

//created a put command that works in postman. movieUpdate is the JSON object, and the updateMovie is the execution [RDM]. 
app.put("/api/movies", (req, res) => {
    let movieUpdate = req.body;
    let updatedMovie = repoContext.movies.updateMovie(movieUpdate);
    res.send(updatedMovie);
})

app.delete("/api/movies/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.movies.deleteMovie(id);
    res.send(updatedDataSet);
});
