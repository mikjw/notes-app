(function(exports) {
  
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error('Assertion failed: ' + assertion + " is not truthy");
      }
    }
  };

  console.log('--- Note model ---');

  console.log('returnTextAsInputed:');
  function returnTextAsInputed(){
    var note = new Note('hello');
      assert.isTrue(note.text() === 'hello');
      console.log('- passed');
  }

  returnTextAsInputed();
})(this);