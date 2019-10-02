(function(exports) {
  function NoteListView(noteList){
    this._noteList = noteList;
  }
  
  NoteListView.prototype.outputHtmlString = function(){
    var output = '';
    for(var i = 0; i< this._noteList.notes().length; i++){
      var note = this._noteList.notes()[i];
      var firstTwenty = note.text().substring(0, 20);
      var url = "#notes/" + note.getId();
      output += ("<li><a href=" + url + ">" + firstTwenty + "..." + "</a></li>");
    }
    output = ("<ul>" + output + "</ul>");
    return output;
  };

  exports.NoteListView = NoteListView;
})(this);