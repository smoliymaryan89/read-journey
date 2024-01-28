import { TimeLeftToRead } from "types/book";

const getTimeLeftString = (timeLeft: TimeLeftToRead) => {
  let result = "";

  if (timeLeft?.hours) {
    result += `${timeLeft.hours} hours and `;
  }

  if (timeLeft?.minutes) {
    result += `${timeLeft.minutes} minutes `;
  }

  return result ? result + "left" : "";
};

export default getTimeLeftString;
