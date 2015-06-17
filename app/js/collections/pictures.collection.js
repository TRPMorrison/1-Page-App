;(function () {

  'use strict';

  app.Collections.Pictures = Backbone.Collection.extend({
    model: app.Models.Picture,
    comparator: 'title',
    url: app.rootURL
  });

}());
