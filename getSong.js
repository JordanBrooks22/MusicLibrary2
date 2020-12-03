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
getAllSongs();