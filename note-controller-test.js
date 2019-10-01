(function(exports) {
   
    var assert = {
      isTrue: function(assertion) {
        if (!assertion) {
          throw new Error('Assertion failed: ' + assertion + " is not truthy");
        }
      }
    };

    console.log('Note controller tests')

    console.log('Test 1:')
    function canBeInstantiatedWithNoteList() {
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      assert.isTrue(noteController._noteList === noteList);
      console.log('passed')
    }
    canBeInstantiatedWithNoteList();

    console.log('Test 2:')
    function CreatesNewNoteOnList() {
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      assert.isTrue(noteController._noteList.notes()[0].text() === "Favourite drink: seltzer");
      console.log('passed')
    }
    CreatesNewNoteOnList();

    console.log('Test 3:')
    function updatesHtmlElementWithNote() {
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      noteController.displayNotes();
      assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Favourite drink: seltzer</div></li></ul>");
      console.log('passed')
    }
    updatesHtmlElementWithNote();
  })(this);