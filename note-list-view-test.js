(function(exports) {
  console.log('--- Note view model ---');

  console.log('canOutputHtmlString');
  function canOutputHtmlString(){
      var noteListTest = new NoteList();
      noteListTest.newNote("Name: Mike");
      noteListTest.newNote("Name: Rafa");
      var noteListView = new NoteListView(noteListTest);
      var htmlString = "<ul><li><div>Name: Mike...</div></li><li><div>Name: Rafa...</div></li></ul>";
      assert.isTrue(noteListView.outputHtmlString() === htmlString);
      console.log('- passed');
  }
  canOutputHtmlString();

  console.log('canTrimHtmlString:');
  function canTrimHtmlString(){
    var noteList = new NoteList();
    noteList.newNote('Favourite cheese: gorgonzola');
    var noteListView = new NoteListView(noteList);
    var htmlString = "<ul><li><div>Favourite cheese: go...</div></li></ul>";
    assert.isTrue(noteListView.outputHtmlString() === htmlString);
    console.log('- passed');
  }
  canTrimHtmlString();
})(this);