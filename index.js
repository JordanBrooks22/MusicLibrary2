"use strict"



const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));

app.listen(5500, function () {
    console.log('Server started. Listening on port 3000.');
});
app.get("/api/songs", (req, res) => {
    let songs = repoContext.songs.findAllSongs();
    res.send(songs);
});
app.get("/api/songs/:id", (req, res) => {
    let id = req.params.id;
    let  = repoContext.songs.findsongById(id);
    res.send(songs);
});


function musicRequest(){
    $.ajax({
        url: "http://www.devcodecampmusiclibrary.com/",
        dataType: "json",
        type: "get",
        sucess: function(data, textStatus, jQxhr) {
           },
           error: function (jqXhr,textStatus, errorThrown) {
               console.log(errorThrown);
           },
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




