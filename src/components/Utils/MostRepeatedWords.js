function MostRepeatWords(word) {
  const words = word.map((item) =>
    [item.title, item.description]
      .join()
      .toLowerCase()
      .replace(/\d+/g, "")
      .match(/\w+/g)
      .filter((item) => item.length >= 4)
      .reduce((ac, a) => ((ac[a] = ac[a] + 1 || 1), ac), {})
  );

  const sortWords = words.map((item) => Object.entries(item));

  const wordsFilter = [].concat
    .apply([], sortWords)
    .sort((a, b) => b[1] - a[1])
    .filter((v) => v[0] !== "http" && v[0] !== "https")
    .map((item) => item.splice(0, 1));

  const arrWords = wordsFilter.map((item) => item[0]);

  const removeWords = arrWords.filter((elem, index, self) => {
    return index === self.indexOf(elem);
  });

  return removeWords.slice(0, 5);
}

export default MostRepeatWords;
