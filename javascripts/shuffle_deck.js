define(function(require) {
  var $ = require("jquery");
  var _ = require("lodash");
  var Q = require("q");

    return {
      shuffleDeck: function() {
        var deferred = Q.defer();

        $.ajax({
          url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
          deck_count:"GET"    
        }).done(function(data){
          console.log("data", data);
          deferred.resolve(data);
        });

        return deferred.promise;
      }
    };
});