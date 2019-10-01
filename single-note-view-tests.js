(function(exports) {
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error('Assertion failed: ' + assertion + " is not truthy");
      }
    }
  };

  console.log('--- Single note view ---');

  console.log('canOutputHtmlString:');
  function canOutputHtmlString(){
      var note = new Note('Favourite cheese: gorgonzola');
      var singleNoteView = new SingleNoteView(note);
      var htmlString = "<div>Favourite cheese: gorgonzola</div>";
      assert.isTrue(singleNoteView.outputHtmlString() === htmlString);
      console.log('- passed');
  }
  canOutputHtmlString();
})(this);