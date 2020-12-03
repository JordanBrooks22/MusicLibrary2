"use strict"

function musicRequest(){
    $.ajax({
        url: 'http://www.devcodecampmusiclibrary.com/api/music',
        dataType: "json",
        type: "get",
        sucess: function(data, textStatus, jQxhr) {
            dataDisplay(result);
        },
        error: function (jQXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        },
    });
}
function dataDisplay(data){
    console.log(data);
    for(let i = 0; i < data.length; i++){
        console.log(data[i].title)
        $("#musicBody").append(
           " <tr> " +
                   " <td>"+data[i].title+"</td>" + 
                   " <td>"+data[i].album+"</td>" + 
                   " <td>"+data[i].artist+"</td>" +
                   " <td>"+data[i].genre+"</td>" + 
                   " <td>"+data[i].releaseDate+"</td>" + 
                " </tr>"
        );
    }
}
