(function(exports) {
  console.log('--- Note view model ---');

  console.log('canOutputHtmlString');
  function canOutputHtmlString(){
      var noteListTest = new NoteList();
      noteListTest.newNote("Name: Mike");
      noteListTest.newNote("Name: Rafa");
      var noteListView = new NoteListView(noteListTest);
      var htmlString = '<ul><li><a href=#notes/1>Name: Mike...</a></li><li><a href=#notes/2>Name: Rafa...</a></li></ul>';
      assert.isTrue(noteListView.outputHtmlString() === htmlString);
      console.log('- passed');
  }
  canOutputHtmlString();

  console.log('canTrimHtmlString:');
  function canTrimHtmlString() {
    var noteList = new NoteList();
    noteList.newNote('Favourite cheese: gorgonzola');
    var noteListView = new NoteListView(noteList);
    var htmlString = "<ul><li><a href=#notes/1>Favourite cheese: go...</a></li></ul>";
    assert.isTrue(noteListView.outputHtmlString() === htmlString);
    console.log('- passed');
  }
  canTrimHtmlString();
})(this);