$(document).ready(function () {
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function () {
        $('#result').html('');
        $('#state').val('');
        $('.table-items').show();
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('http:localhost:3000/api/songs', function (data) {
            $.each(data, function (index, movie) {
                if (song.title.search(expression) != -1 || song.artist.search(expression) != -1 || song.genre.search(expression) != -1) {
                    $('#result').append('<li class="list-group-item link-class" onclick="searchSong('+song.id+')"><img src="' + song.image + '" height="40" width="40" class="img-thumbnail" /> ' + song.title + ' | <span class="text-muted">' + song.artist + '</span> | <span class="text-muted">' + song.genre + '</span></li>');
                    
                }
            });
        });
    });

    $('#result').on('click', 'li', function () {
        var click_text = $(this).text().split('|');
        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
        $('#search').val('').change();
    });
});

function searchSong(id) {
    $('.table-items').hide();
    $('#song_'+id).show();
    

}

