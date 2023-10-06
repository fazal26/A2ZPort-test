const getLongestWord = (str = "") => {
  const words = str.replace(/[-,._(){}"'#@!~?]/g, "").split(" ");

  if (!words) {
    return "";
  }

  let maxWord = "";
  let maxVowelCount = 0;

  const getVowelCount = (data) => data.length > 0 && data.match(/[aeiouAEIOU]/gi).length;

  for (let word of words) {
    if (word.length > maxWord.length) {
      maxWord = word;
      maxVowelCount = getVowelCount(word);
    } else if (word.length === maxWord.length) {
      const currentVowelCount = getVowelCount(word);
      if (maxVowelCount < currentVowelCount) {
        maxWord = word;
        maxVowelCount = currentVowelCount;
      }
    }
  }
  return maxWord;
};

const str = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have () all- the@ answers";
getLongestWord(str);
