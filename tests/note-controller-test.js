(function(exports) {
  console.log('--- Note controller ---');

  console.log('canBeInstantiatedWithNoteList:');
  function canBeInstantiatedWithNoteList() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController._noteList === noteList);
    console.log('- passed');
  }
  canBeInstantiatedWithNoteList();

  console.log('CreatesNewNoteOnList:');
  function CreatesNewNoteOnList() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController._noteList.notes()[0].text() === "Favourite drink: seltzer");
    console.log('- passed');
  }
  CreatesNewNoteOnList();

  console.log('updatesHtmlElementWithNote:');
  function updatesHtmlElementWithNote() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    noteController.displayNotes();
    assert.isTrue(document.getElementById("app").innerHTML === '<ul><li><a href="#notes/1">Favourite drink: sel...</a></li></ul>');
    console.log('- passed');
  }
  updatesHtmlElementWithNote();

  console.log('updatesPageWithNote:');
  function updatesPageWithNote() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    noteList.newNote('test-note');
    noteList.newNote('test-note-2');
    noteController.displayNotes();
    window.location.href = "#notes/1";
    noteController.displayNotes();
    assert.isTrue(document.getElementById("app").innerHTML === '<div>Favourite drink: seltzer</div>');
    console.log('- passed');
  }
  updatesPageWithNote();
})(this);