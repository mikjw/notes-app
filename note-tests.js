(function(exports) {
  
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error('Assertion failed: ' + assertion + " is not truthy");
      }
    }
  };

  function returnTextAsInputed(){
    var note = new Note('hello');
      assert.isTrue(note.text() === 'hello');
  }

  returnTextAsInputed();
})(this);