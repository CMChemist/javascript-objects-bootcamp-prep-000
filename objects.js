var playlist = new Object ({Beyonce: "Formation"});

function updatePlaylist (obj , artistName, songTitle) {
  return Object.assign(obj, { [artistName]: songTitle});
}

function removeFromPlaylist (obj , artistName) {
  delete obj.artistName;
  return obj;
}