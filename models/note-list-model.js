(function(exports) {
  function NoteList() {
    this._notes = [];
  }

  NoteList.prototype.notes = function() {
    return this._notes;
  };

  NoteList.prototype.newNote = function(input) {
    this._notes.push(new Note(input));
  };

  exports.NoteList = NoteList;
})(this);