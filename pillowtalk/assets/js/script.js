$(document).ready(function(){

  $("#sendtofriend").click(function() {
      $(".modal").show();
  });

  $("#Send").click(function() {
      $(".modal").hide();
  });

  $("#cancel").click(function() {
      $(".modal").hide();
  });
  $("#sendtofriend").click(function() {
      $(this).hide();
    });
    $("#confirm").click(function() {
        $("#sendtofriend").show();
    });

    $("#cancel").click(function() {
        $("#sendtofriend").show();
    });
    $("#Send").click(function() {
        $(".success").show();
    });
    $("#confirm").click(function() {
        $(".success").hide();
    });

    $( "#who" ).hover(
    function() {
      $( "#who" ).append( $( "<div> Wouldn't you like to know </div>" ) );
    }, function() {
      $( "#who" ).find( "div:last" ).remove();
    });

    $( "#why" ).hover(
    function() {
      $( "#why" ).append( $( "<div> Wouldn't you like to know </div>" ) );
    }, function() {
      $( "#why" ).find( "div:last" ).remove();
    });

    $( "#how" ).hover(
    function() {
      $( "#how" ).append( $( "<div> Wouldn't you like to know </div>" ) );
    }, function() {
      $( "#how" ).find( "div:last" ).remove();
    });


    $( "#who" ).hover(function() {
      $( this ).css( "color", "grey" );
    }, function () {
      $( this ).css("color", "black");
      });
      $( "#why" ).hover(function() {
        $( this ).css( "color", "grey" );
      }, function () {
        $( this ).css("color", "black");
        });
        $( "#how" ).hover(function() {
          $( this ).css( "color", "grey" );
        }, function () {
          $( this ).css("color", "black");
          });
});
