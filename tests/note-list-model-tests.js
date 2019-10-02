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
  function returnsAllNotesInList() {
    var noteList = new NoteList();
    noteList.newNote('test note');
    noteList.newNote('test note 2');
    assert.isTrue(typeof noteList.notes()[0] === 'object');
    assert.isTrue(noteList.notes()[0].text() === 'test note');
    assert.isTrue(noteList.notes().length === 2);
    console.log('- passed');
  }
  returnsAllNotesInList();

  console.log('givesNewNotesId');
  function givesNewNotesId() {
    var noteList = new NoteList();
    noteList.newNote('test note');
    noteList.newNote('test note 2');
    assert.isTrue(noteList.notes()[0].text() === 'test note');
    assert.isTrue(noteList.notes()[0].getId() === 1);
    assert.isTrue(noteList.notes()[1].getId() === 2);
    console.log('- passed');
  }
  givesNewNotesId();

  console.log('createsUniqueIds');
  function createsUniqueIds() {
    var noteList = new NoteList();
    noteList.newNote('test note');
    noteList.newNote('test note 2');
    assert.isTrue(noteList.notes()[0].text() === 'test note');
    assert.isTrue(noteList.notes()[0].getId() === 1);
    assert.isTrue(noteList.notes()[1].getId() === 2);
    noteList.clearNotes();
    noteList.newNote('test note');
    assert.isTrue(noteList.notes()[0].getId() === 3);
    console.log('- passed');
  }

  createsUniqueIds();
})(this);