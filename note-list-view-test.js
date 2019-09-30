(function(exports) {
  
    var assert = {
      isTrue: function(assertion) {
        if (!assertion) {
          throw new Error('Assertion failed: ' + assertion + " is not truthy");
        }
      }
    };
  
    function outPutHtmlString(){
        var noteListTest = new NoteList();
        noteListTest.newNote("Name: Mike");
        noteListTest.newNote("Name: Rafa");
        var noteListView = new NoteListView(noteListTest);
        var htmlString = "<ul><li><div>Name: Mike</div></li><li><div>Name: Rafa</li></div></ul>";
        assert.isTrue(noteListView.outPutHtmlString() === htmlString);
    }
    outPutHtmlString();

  })(this);