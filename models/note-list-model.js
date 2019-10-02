(function(exports) {
  function NoteList() {
    this._notes = [];
    this._nextId = 0;
  }

  NoteList.prototype.notes = function() {
    return this._notes;
  };

  NoteList.prototype.newNote = function(text) {
    var id = this.getId();
    this._notes.push(new Note(text, id));
  };

  NoteList.prototype.getId = function() {
    this._nextId++;
    return this._nextId;
  };

  exports.NoteList = NoteList;
})(this);