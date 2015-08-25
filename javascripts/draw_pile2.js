define(function(require) {
  var $ = require("jquery");
  var _ = require("lodash");
  var Q = require("q");

    return {
      drawPile2: function(id, code) {
        console.log("drawPile2_Code", code);
        var deferred = Q.defer();

        $.ajax({
          url: "http://deckofcardsapi.com/api/deck/" + id + "/pile/player2/draw/?cards=" + code
        }).done(function(data){
          console.log("drawPile2", data);
          deferred.resolve(data);
        });

        return deferred.promise;
      }
    };
});