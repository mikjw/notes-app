(function(exports) {
  function NoteListView(noteList){
    this._noteList = noteList;
  }
  
  NoteListView.prototype.outputHtmlString = function(){
    var output = '';
    for(var i = 0; i< this._noteList.notes().length; i++){
      output += ("<li><div>" + this._noteList.notes()[i].text().substring(0, 20) + "..." + "</div></li>");
    }
    output = ("<ul>" + output + "</ul>");
    return output;
  };
  
  exports.NoteListView = NoteListView;
})(this);