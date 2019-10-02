(function(exports) {
  console.log('--- Note model ---');

  console.log('returnTextAsInputed:');
  function returnTextAsInputed(){
    var note = new Note('hello');
      assert.isTrue(note.text() === 'hello');
      console.log('- passed');
  }

  returnTextAsInputed();
})(this);