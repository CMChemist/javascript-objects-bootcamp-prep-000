var playlist = new Object ({Beyonce: "Formation"});
var i = 0;

function updatePlaylist (obj , artistName, songTitle) {
  /*if (i === 0) {
    delete obj.Beyonce;
    i++;
  }*/
  return Object.assign({}, obj, { [artistName]: songTitle});
}

function removeFromPlaylist (obj , artistName) {
  delete obj.artistName;
  return obj;
}