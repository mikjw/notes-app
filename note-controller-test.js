(function(exports) {
   
    var assert = {
      isTrue: function(assertion) {
        if (!assertion) {
          throw new Error('Assertion failed: ' + assertion + " is not truthy");
        }
      }
    };

    function canBeInstantiatedWithNoteList() {
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      assert.isTrue(noteController._noteList === noteList); 
    }
    canBeInstantiatedWithNoteList();

    function CreatesNewNoteOnList() {
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      assert.isTrue(noteController._noteList.notes()[0].text() === "Favourite drink: seltzer");
    }
    CreatesNewNoteOnList();

    function updatesHtmlElementWithNote() {
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      noteController.displayNotes();
      assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
    }
    updatesHtmlElementWithNote();
  })(this);