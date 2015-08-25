define(function(require) {
  var $ = require("jquery");
  var _ = require("lodash");
  var hbs = require("hbs");
  var shuffle = require("shuffle_deck");
  var draw = require("deck_one_draw");
  var draw2 = require("deck_two_draw");
  var deckOne;
  var deckTwo;

 $(document).on("click", "#shuffle", function() {
  shuffle.shuffleDeck().then(function(deck) {
    $(document).on("click", "#deal", function() {
      deckOne = deck.deck_id;
      console.log("deckOne", deckOne);
      draw.drawACard(deckOne);
      war.warLogic();
    });

    })
    .fail(function(error) {

    });
  
  shuffle.shuffleDeck().then(function(deck) {
   $(document).on("click", "#deal", function() {
      deckTwo = deck.deck_id;
      console.log("deckTwo", deckTwo);
      draw2.drawACard2(deckTwo);
    
    });
    

    })
    .then(function(data) {
      $("#take").click(function() {
      console.log("MyVal", value);
      if (value > value2) {
        alert("player1");
       }else if (value2 > value) {
        alert("player2");
       } else {
        alert("draw");
       }
     }).fail(function(error) {

     });
    });
  
  });


  
});