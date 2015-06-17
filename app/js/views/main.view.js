;(function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: 'main',

    events: {
      'submit #addPicture' : 'addPicture'
    },

    template: hbs.main,

    initialize: function (options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function () {
      this.$el.html(this.template({ Picture: this.collection.toJSON() }));
    },

    addPicture: function (event) {

      event.preventDefault();


      var self = this,
          form = $(event.target),
          title = form.find('#pictureTitle').val(),
          url = form.find('#pictureURL').val();


      var p = new app.Models.Picture({
        url: url,
        title: title
      });


      this.collection.add(p).save().success( function () {
        self.render();
      });

    }

  });

}());
