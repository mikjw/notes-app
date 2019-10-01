(function(exports) {
    var assert = {
      isTrue: function(assertion) {
        if (!assertion) {
          throw new Error('Assertion failed: ' + assertion + " is not truthy");
        }
      }
    };
  
    function canOutputHtmlString(){
        var noteListTest = new NoteList();
        noteListTest.newNote("Name: Mike");
        noteListTest.newNote("Name: Rafa");
        var noteListView = new NoteListView(noteListTest);
        var htmlString = "<ul><li><div>Name: Mike</div></li><li><div>Name: Rafa</div></li></ul>";
        assert.isTrue(noteListView.outputHtmlString() === htmlString);
    }
    canOutputHtmlString();
  })(this);