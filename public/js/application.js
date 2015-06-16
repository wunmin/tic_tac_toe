$(document).ready(function() {

  $("new_game").submit(function(event){
    event.preventDefault();
    $.ajax({
      url: "/games/new",
      type: "POST",
      success: function(response){
        $(".available_games").append('<div>\
            response.player1_id\
            <form action="/games/" + response.id + "/join" method="POST">\
              <input type="submit" value="Join"></input>\
            </form>\
          </div>')
      }
    });
  });
});
