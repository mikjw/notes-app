(function(exports) {
    
    function NoteController(noteList) {
      this._noteList = noteList;
      this._noteList.newNote("Favourite drink: seltzer");
      this._noteListView = new NoteListView(noteList);
    }
    
    NoteController.prototype.displayNotes = function() {
      document.getElementById("app").innerHTML = noteListView.outputHtmlString();
    }; 

  exports.NoteController = NoteController;
})(this);