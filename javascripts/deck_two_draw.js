define(function(require) {

  var $ = require("jquery");
  var shuffle = require("shuffle_deck");
  var getTemplates = require("get-templates");

  return {
    drawACard2: function(deckId) {
    console.log("deckId2", deckId);
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/"+ deckId +"/draw/?count=1"  
      }).done(function(data){
        console.log("data", data);
        for (var i = 0; i < data.cards.length; i++) {
          value2 = data.cards[i].value;
          console.log("VALUE2", value2);
        }
        var populatedTemplate = getTemplates.card2Tpl(data);

        $("#main2").html(populatedTemplate);

      });
    }
  };
});