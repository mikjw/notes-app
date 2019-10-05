(function(exports) {
  function NoteList() {
    this._notes = [];
    this._nextId = 0;
  }

  NoteList.prototype.notes = function() {
    return this._notes;
  };

  NoteList.prototype.newNote = function(text) {
    var id = this.getUniqueId();
    this._notes.push(new Note(text, id));
  };

  NoteList.prototype.getUniqueId = function() {
    this._nextId++;
    return this._nextId;
  };

  NoteList.prototype.clearNotes = function() {
    this._notes = [];
  };

  NoteList.prototype.findById = function(id) {
    return this._notes.find(function(el) {
      return el.getId() === id;
    });
  };

  exports.NoteList = NoteList;
})(this);