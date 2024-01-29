import { BookProgress } from "types/book";

interface DiaryEntryDetail {
  percent: number;
  startReading: string;
  finishReading: string;
  readingSpeed: number;
}

interface DiaryEntry {
  date: string;
  totalPagesRead: number;
  detail: DiaryEntryDetail[];
}

interface getProgressByDateProps {
  progress: BookProgress[];
  totalPages: number;
}

const getProgressByDate = ({ progress, totalPages }: getProgressByDateProps) =>
  progress
    .filter(({ status }) => status === "inactive")
    .reduce(
      (
        acc: DiaryEntry[],
        { startReading, finishReading, finishPage, startPage, status }
      ) => {
        const date = new Date(finishReading).toDateString();
        const existingEntry = acc.find((entry) => entry.date === date);
        const pagesRead =
          status === "inactive" ? finishPage - startPage + 1 : 0;
        const percentageRead = parseFloat(
          ((pagesRead / totalPages) * 100).toFixed(2)
        );

        const startTime = new Date(startReading).getTime();
        const finishTime = new Date(finishReading).getTime();
        const readingTimeInHours = (finishTime - startTime) / 3600000;
        const readingSpeed = Math.round(pagesRead / readingTimeInHours);

        if (existingEntry) {
          existingEntry.totalPagesRead =
            (existingEntry.totalPagesRead || 0) + pagesRead;

          existingEntry.detail = existingEntry.detail || [];
          existingEntry.detail.push({
            percent: percentageRead,
            startReading,
            finishReading,
            readingSpeed,
          });
        } else {
          acc.push({
            date,
            totalPagesRead: pagesRead,
            detail: [
              {
                percent: percentageRead,
                startReading,
                finishReading,
                readingSpeed,
              },
            ],
          });
        }

        return acc;
      },
      []
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default getProgressByDate;
