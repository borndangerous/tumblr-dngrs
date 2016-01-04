/* DNGRS > Scripts ##################################### */

$(document).ready(function() {
  console.log("DNGRS > Ready");

  $(".convert-emoji").each(function() {
    var original = $(this).html();

    //var converted = emojione.toImage(original);
    var converted = emojione.shortnameToImage(original);
    
    $(this).html(converted);

  });

});
