class Formatter {
  //add static methods here
static capitalize(string){
 return string.charAt(0).toUpperCase() + string.slice(1);
}


static sanitize(string){
  const nonAlphanumericRegex = /[^a-zA-Z0-9-' ]/g;
  return string.replace(nonAlphanumericRegex, '');
}
static titleize(string){
  const exceptions = ['the','a','an','but','of','and','for','at','by','from'];
  const words = string.split(' ');
  const titleizedWords = words.map((word,index) => {
    if (index === 0 || !exceptions.includes(word)) {
      return this.capitalize(word);
    }
    else {
      return word;
    }
  });

  return titleizedWords.join(' ');

}
}