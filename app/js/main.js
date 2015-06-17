;(function (){

  'use strict';

  var allBookmarks = new app.Collections.Bookmarks();

  allBookmarks.fetch().done( function () {

    new app.Routers.MainRouter({
      collection: allBookmarks
    });
    Backbone.history.start();

  });

}());
