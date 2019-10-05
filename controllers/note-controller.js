(function(exports) {
  function NoteController(noteList) {
    var self = this;
    this._noteList = noteList;
    this._noteList.newNote("Favourite drink: seltzer");
    this._noteListView = new NoteListView(this._noteList);

  window.addEventListener("hashchange", function(event) {
    event.preventDefault();
    var noteId = parseInt(window.location.hash.split("/")[1]);
    var noteObj = self._noteList.findById(noteId);
    var singleNoteView = new SingleNoteView(noteObj);
      document.getElementById("app").innerHTML = singleNoteView.outputHtmlString();
  });
}

  NoteController.prototype.displayNotes = function() {
    document.getElementById("app").innerHTML = this._noteListView.outputHtmlString();
  }; 

exports.NoteController = NoteController;
})(this);

var noteList = new NoteList();
var noteController = new NoteController(noteList);

window.onload = function() {
  noteController.displayNotes();
};