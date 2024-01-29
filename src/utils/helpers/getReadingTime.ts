const getReadingTime = (
  startReading: string,
  finishReading: string
): string => {
  const startDate = new Date(startReading);
  const finishDate = new Date(finishReading);
  const diffInMs = Math.abs(finishDate.getTime() - startDate.getTime());
  const diffInMinutes = Math.floor(diffInMs / 1000 / 60);
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;

  return hours === 0
    ? `${minutes} minutes`
    : `${hours} hours and ${minutes} minutes`;
};

export default getReadingTime;
