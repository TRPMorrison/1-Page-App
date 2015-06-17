;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function (options) {

      var args = options || {};
      this.collection = args.collection;

    },

    routes: {
      '' : 'homePage',
      'picture/:id' : 'singlePicture',
      'about' : 'aboutPage'
    },

    aboutPage: function () {
      new app.Views.AboutView();
    },

    homePage: function () {
      new app.Views.Main({
        collection: this.collection
      });
    },

    singlePicture: function (id) {
      new app.Views.SingleView({
        singleId: id,
        collection: this.collection
      });
    }

  });

}());
