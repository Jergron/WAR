define(function(require) {

  var $ = require("jquery");
  var shuffle = require("shuffle_deck");
  var getTemplates = require("get-templates");

  return {
    dealACard: function(deckId) {
    console.log("deckId1", deckId);
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/"+ deckId +"/draw/?count=1"  
      }).done(function(data){
        console.log("data", data);
        for (var i = 0; i < data.cards.length; i++) {
          value = data.cards[i].value;
          codeOne = data.cards[i].code;
          console.log("VALUE", value);
          console.log("codeOne", codeOne);
        }
        var populatedTemplate = getTemplates.cardTpl(data);

        $("#main").html(populatedTemplate);
      });
    }
  };
});