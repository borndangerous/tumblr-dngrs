/* DNGRS > Scripts ##################################### */

$(document).ready(function() {
  console.log("DNGRS > Ready");

  var original = $(".post-content").html();
  var converted = emojione.toImage(original);
  //var converted = emojione.shortnameToImage(original);

  $(".post-content").html(converted);

  /*
  $(".convert-emoji").each(function() {
    var original = $(this).html();

    var converted = emojione.toImage(original);
    //var converted = emojione.shortnameToImage(original);

    $(this).html(converted);

  });
  */

});
