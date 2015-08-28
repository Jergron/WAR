define(function(require) {

  var $ = require("jquery");
  var shuffle = require("shuffle_deck");
  var getTemplates = require("get-templates");

// Decreases card deck count by 1 using the unique ID from the API
  return {
    dealACard2: function(deckId) {
  
      $.ajax({
        url: "http://deckofcardsapi.com/api/deck/"+ deckId +"/draw/?count=1"  
      }).done(function(data){
    
        for (var i = 0; i < data.cards.length; i++) {
          value2 = data.cards[i].value;

          //Swtiches string values to numbers
          if (value2 === "QUEEN" || value2 === "KING" || value2 === "ACE" || value2 === "JACK") {
            switch(value2){
              case "ACE": value2 = parseInt("14");
              break;
              case "KING": value2 = parseInt("13");
              break;
              case "QUEEN": value2 = parseInt("12");
              break;
              case "JACK": value2 = parseInt("11");
              break;
            }
          } else { 
              parseInt(value2);
          }
          codeTwo = data.cards[i].code;
          console.log("VALUE2", value2);
        }
        var populatedTemplate = getTemplates.card2Tpl(data);

        $("#main2").html(populatedTemplate);

      });
    }
  };
});