(function(exports) {
  function SingleNoteView(note){
    this._note = note;
  }
  
  SingleNoteView.prototype.outputHtmlString = function(){
    var output = "<div>" + this._note.text()+ "</div>";
    return output;
  };
  
  exports.SingleNoteView = SingleNoteView;
})(this);