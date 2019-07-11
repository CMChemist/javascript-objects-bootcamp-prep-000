var playlist = new Object ({Beyonce: "Formation"});
var i = 0;

function updatePlaylist (playlist, artistName, songTitle) {
  if (i === 0) {
    delete playlist.Beyonce;
    i++;
  }
  var newPlaylist = Object.assign({}, playlist, { [artistName]: songTitle});
  return newPlaylist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}