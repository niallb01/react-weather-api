export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeSentence(sentence) {
  const sentenceArr = sentence.split(" ");
  for (let i = 0; i < sentenceArr.length; i++) {
    sentenceArr[i] = capitalize(sentenceArr[i]);
  }
  return sentenceArr.join(" ");
}

export function formatDate(date) {
  if (date > 3 && date < 21) return "th";
  switch (date % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export function modifyDate(string) {
  const split = string.split(" ");
  split[2] = split[2] + formatDate(split[2]);
  return split.join(" ");
}
