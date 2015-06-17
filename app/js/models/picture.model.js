;(function () {

  'use strict';
  app.Models.Picture = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: {
      url: '',
      title: '',
      description: '',
      visited: false
    }

  });

}());
