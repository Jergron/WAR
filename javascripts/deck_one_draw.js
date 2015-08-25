define(function(require) {

  var $ = require("jquery");
  var shuffle = require("shuffle_deck");
  var getTemplates = require("get-templates");

  return {
    drawACard: function(deckId) {
    console.log("deckId1", deckId);
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/"+ deckId +"/draw/?count=1"  
      }).done(function(data){
        console.log("data", data);
        for (var i = 0; i < data.cards.length; i++) {
          value = data.cards[i].value;
          console.log("VALUE", value);
        }
        var populatedTemplate = getTemplates.cardTpl(data);

        $("#main").html(populatedTemplate);
      });
    }
  };
});