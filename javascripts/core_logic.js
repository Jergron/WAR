define(function(require) {
  var $ = require("jquery");
  var _ = require("lodash");
  var hbs = require("hbs");
  var shuffle = require("shuffle_deck");
  var deal = require("deck_one_deal");
  var deal2 = require("deck_two_deal");
  var drawFromPlayer1 = require("draw_pile");
  var drawFromPlayer2 = require("draw_pile2");
  var playerOne = [];
  var playerTwo = [];
  var deckOne;
  var deckTwo;
  var total = 0;
  var sum1 = $.each(playerOne,function() {
    total += this;
  });
  var sum2 = $.each(playerTwo,function() {
    total += this;
  });


 $(document).on("click", "#shuffle", function() {
  shuffle.shuffleDeck().then(function(deck) {
    $(document).on("click", "#deal", function() {

      deckOne = deck.deck_id;

      deal.dealACard(deckOne);

    });

    })
    .fail(function(error) {

    });
  
  shuffle.shuffleDeck().then(function(deck) {
   $(document).on("click", "#deal", function() {

      deckTwo = deck.deck_id;

      deal2.dealACard2(deckTwo);
    
    });
    

    })
    .then(function(data) {
      $("#deal").click(function() {
      // console.log("MyVal", value);
      // console.log("MyVal2", value2);
      // console.log("codeOne", codeOne);
      // console.log("codeTwo", codeTwo);

      if (value > value2) {

        playerOne.push(2);
        console.log("Player One", playerOne);
        
       } else if (value2 > value) {
        
       playerTwo.push(2);
       console.log("Player Two", playerTwo);
        
       } else {

        alert("draw");
       }
     });
    })
    .then(function(data) {
      $("#total").click(function() {
        if(sum1 > sum2) {
          console.log("Total Data Player One", sum1);
            alert("Player One Wins!");
        } 
        else if (sum2 > sum1) { 
          console.log("Total Player Two", sum2);
            alert("Player Two Wins!");
        }
      });
    });
  
  });


  
});