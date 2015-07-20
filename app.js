(function(){
  var app = angular.module('jogging', []);
  app.controller('JogListController', function(){
    var jogList = this;
    jogList.jogs = [
      {date:new Date(), meters:3000, seconds:600},
      {date:new Date(), meters:4000, seconds:900},
      {date:new Date(), meters:5000, seconds:1200}
    ];

    jogList.addJog = function() {
      jogList.jogs.push({
        date: new Date(jogList.jogDate),
        meters: jogList.jogMeters,
        seconds: jogList.jogSeconds
      });
      jogList.jogDate = null;
      jogList.jogMeters = null;
      jogList.jogSeconds = null;
    };
  });
})();
