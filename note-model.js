
(function(exports) {
  function Note(input) {
    this._text = input;
  }

  Note.prototype.text = function() {
    return this._text;
  };

  exports.Note = Note;
})(this);