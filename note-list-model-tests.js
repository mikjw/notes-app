(function(exports) {
  
  var assert = {
    isTrue: function(assertion) {
      if (!assertion) {
        throw new Error('Assertion failed: ' + assertion + " is not truthy");
      }
    }
  };

  function canCreateNewNotes(){
    var noteList = new NoteList();
    noteList.newNote('test note');
    assert.isTrue(noteList.notes().length === 1);
  }
  canCreateNewNotes();

  function returnsAllNotesInList(){
    var noteList = new NoteList();
    noteList.newNote('test note');
    noteList.newNote('test note 2');
    assert.isTrue(typeof noteList.notes()[0] === 'object');
    assert.isTrue(noteList.notes()[0].text() === 'test note');
    assert.isTrue(noteList.notes().length === 2);
  }
  returnsAllNotesInList();
})(this);