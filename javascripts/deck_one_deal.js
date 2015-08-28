define(function(require) {

  var $ = require("jquery");
  var shuffle = require("shuffle_deck");
  var getTemplates = require("get-templates");

// Decreases card deck count by 1 using the unique ID from the API
  return {
    dealACard: function(deckId) {
    
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/"+ deckId +"/draw/?count=1"  
      }).done(function(data){

        for (var i = 0; i < data.cards.length; i++) {
          value = data.cards[i].value;

          //Swtiches string values to numbers
          if (value === "QUEEN" || value === "KING" || value === "ACE" || value === "JACK") {
            switch(value){
              case "ACE": value = parseInt("14");
              break;
              case "KING": value = parseInt("13");
              break;
              case "QUEEN": value = parseInt("12");
              break;
              case "JACK": value = parseInt("11");
              break;
            }
          } else { 
              parseInt(value);
          }
          codeOne = data.cards[i].code;
          console.log("VALUE", value);
        }
        var populatedTemplate = getTemplates.cardTpl(data);

        $("#main").html(populatedTemplate);
        
      });
    }
  };
});