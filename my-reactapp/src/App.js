
import './App.css';
import MusicList from './MusicList';

function App() {
  return (
    <div className="App">
      
      < MusicList />
    </div>
  );
}

export default App;


"use strict";


function musicRequest(){
    $.ajax({
           url: "http://www.devcodecampmusiclibrary.com/", 
           type: "GET",
           dataType: "json",
            success: function(result){
                dataDisplay(result);
     
       }});
}
musicRequest();


function dataDisplay(music){
    console.log(music);
    for(let i = 0; i < music.length; i++){
        console.log(music[i].title)
        $("#musicBody").append(
           " <tr> " +
                   " <td>"+music[i].title+"</td>" + 
                   " <td>"+music[i].album+"</td>" + 
                   " <td>"+music[i].artist+"</td>" +
                   " <td>"+music[i].genre+"</td>" + 
                   " <td>"+music[i].releaseDate+"</td>" + 
                " </tr>"
        );
    }
}


