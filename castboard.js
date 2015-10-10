var Casting = (function() {
  var htmlbody;

  var getNews = function(onSuccess, onFailure) {
       $.ajax({
           type: 'GET',
           url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=f2f5cc2bf930cb2c986cc71bb6c06a05%3A14%3A73181276',
           dataType: "json",
           success: onSuccess,
           error: onFailure
       });
   };

   var insertNews = function(news) {
        var cont = htmlbody.find('#news1') // container name to put the news
        var thisnews = news[0];
        cont.find('.title').text(thisnews.title);
        cont.find('.summary').text(thisnews.abstract);
        cont.find('.image').attr("src", thisnews["media"][0]['media-metadata'][0]["url"]); //last 0 for 320x320, check API for more

        cont = htmlbody.find('#news2')  // container name to put the news
        thisnews = news[1];
        cont.find('.title').text(thisnews.title);
        cont.find('.summary').text(thisnews.abstract);
        cont.find('.image').attr("src", thisnews["media"][0]['media-metadata'][1]["url"]); //last 0 for 320x320, check API for more

        cont = htmlbody.find('#news3')  // container name to put the news
        thisnews = news[2];
        cont.find('.title').text(thisnews.title);
        cont.find('.summary').text(thisnews.abstract);
        cont.find('.image').attr("src", thisnews["media"][0]['media-metadata'][1]["url"]); //last 0 for 320x320, check API for more
    };

   var displayNews = function() {
       var onSuccess = function(data) {
            var news = data.results
            insertNews(news);

        };
        var onFailure = function() { 
            console.error('display news failed'); 
        };
        getNews(onSuccess, onFailure);
   }

   // var getWeather = function(onSuccess, onFailure) {
   //     $.ajax({
   //         type: 'GET',
   //         url: 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=f2f5cc2bf930cb2c986cc71bb6c06a05%3A14%3A73181276'
   //         dataType: "json",
   //         success: onSuccess,
   //         error: onFailure
   //     });
   // };

   // var insertWeather = function(news, i) {
   //      var cont = $('') // container name to put the news

   //      cont.find('.title').text(news.title);
   //      cont.find('.summary').text(news.abstract);
   //      cont.find('.image').src = news.media[0].media-metadata[0]; //last 0 for 320x320, check API for more
   //  };

   // var displayWeather = function() {
   //     var onSuccess = function(data) {
   //          var weather = data.results
   //          i = 0;

   //          for(i = 0; i < 3; i++) {
   //              insertNews(news[i], i);
   //          }

   //      };
   //      var onFailure = function() { 
   //          console.error('display news failed'); 
   //      };
   //      getNews(onSuccess, onFailure);
   // }

   var start = function() {
      htmlbody = $(".news");
      displayNews();
      alert("done");

   };
    

  return {
        start: start
  };



})();
