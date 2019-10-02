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
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: sel...</div></li></ul>");
    console.log('- passed');
  }
  updatesHtmlElementWithNote();
})(this);