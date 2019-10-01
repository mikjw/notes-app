(function(exports) {
    var assert = {
      isTrue: function(assertion) {
        if (!assertion) {
          throw new Error('Assertion failed: ' + assertion + " is not truthy");
        }
      }
    };
  
    console.log('Note view model tests')

    console.log('Test 1:')
    function canOutputHtmlString(){
        var noteListTest = new NoteList();
        noteListTest.newNote("Name: Mike");
        noteListTest.newNote("Name: Rafa");
        var noteListView = new NoteListView(noteListTest);
        var htmlString = "<ul><li><div>Name: Mike</div></li><li><div>Name: Rafa</div></li></ul>";
        assert.isTrue(noteListView.outputHtmlString() === htmlString);
        console.log('passed')
    }
    canOutputHtmlString();
  })(this);