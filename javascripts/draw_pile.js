define(function(require) {
  var $ = require("jquery");
  var _ = require("lodash");
  var Q = require("q");

    return {
      drawPile: function(id, code) {
        var deferred = Q.defer();

        $.ajax({
          url: "http://deckofcardsapi.com/api/deck/" + id + "/pile/player1/draw/?cards=" + code
        }).done(function(data){
          console.log("drawPile", data);
          deferred.resolve(data);
        });

        return deferred.promise;
      }
    };
});