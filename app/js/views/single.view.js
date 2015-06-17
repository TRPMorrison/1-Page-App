;(function () {

  'use strict';
  app.Views.SingleView = Backbone.View.extend({

    className: 'single',

    template: hbs.single,

    events: {
      'click #delete': 'deletePicture'
    },

    initialize: function(options) {
      var args = options || {};
      this.pictureId = args.pictureId;
      this.collection = args.collection;

      this.render();
      $('#content').html(this.el);
    },

    render: function() {
      var singlePicture = this.collection.get(this.pictureId);
      this.$el.html(this.template(singlePicture.toJSON()));
    },

    deletePicture: function(event) {
      var button = event.target;
      var modelID = $(button).data('id');
      var thisPicture = this.collection.get(modelID);

      thisPicture.destroy().success(function(){
        console.log('Picture deleted!');
      });
    }
  });

}());
