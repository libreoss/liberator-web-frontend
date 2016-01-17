module.exports = function(path) {
  if(path.search("dist") == -1)
    return true;
  else
    return false;
};
