(function(exports) {
  console.log('--- Note list model ---');

  console.log('canCreateNewNotes:');
  function canCreateNewNotes(){
    var noteList = new NoteList();
    noteList.newNote('test note');
    assert.isTrue(noteList.notes().length === 1);
    console.log('- passed');
  }
  canCreateNewNotes();

  console.log('returnsAllNotesInList:');
  function returnsAllNotesInList(){
    var noteList = new NoteList();
    noteList.newNote('test note');
    noteList.newNote('test note 2');
    assert.isTrue(typeof noteList.notes()[0] === 'object');
    assert.isTrue(noteList.notes()[0].text() === 'test note');
    assert.isTrue(noteList.notes().length === 2);
    console.log('- passed');
  }
  returnsAllNotesInList();
})(this);