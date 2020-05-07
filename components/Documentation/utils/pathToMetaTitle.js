function capitalizeString(string) {
  let spiltString = string.split(' ');
  for (var i = 0; i < spiltString.length; i++) {
    spiltString[i] = spiltString[i].charAt(0).toUpperCase() + spiltString[i].slice(1);
  }
  return spiltString.join(' ');
}

function cleanRoute(path) {
  path = path.substr(1);
  path = path.replace('/', ' | ');
  path = path.replace('-', ' ');
  return capitalizeString(path);
}

export default cleanRoute;
