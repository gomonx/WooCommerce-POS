var ReceiptView = require('lib/config/receipt-view');
var hbs = require('handlebars');

module.exports = ReceiptView.extend({

  tagName: 'iframe',

  template: function(){},

  onShow: function(){
    var template = hbs.compile( this.options._template );
    this.el.contentWindow.document.write(template( this.data ));
  },

  getData: function(){
    if(!this._receipt){
      var template = hbs.compile( this.options._template );
      this._receipt = template( this.data );
    }
    return this._receipt;
  }

});