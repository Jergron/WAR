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
          value2 = data.cards[i].value;
          if (value2 === "QUEEN" || value2 === "KING" || value2 === "ACE" || value2 === "JACK") {
            switch(value2){
              case "ACE": parseInt("14");
              break;
              case "KING": parseInt("13");
              break;
              case "QUEEN": parseInt("12");
              break;
              case "JACK": parseInt("11");
              break;
            }
          } else { 
              parseInt(value2);
          }
          codeOne = data.cards[i].code;
          console.log("VALUE", value2);
          console.log("codeOne", codeOne);
        }
        var populatedTemplate = getTemplates.cardTpl(data);

        $("#main").html(populatedTemplate);
      });
    }
  };
});