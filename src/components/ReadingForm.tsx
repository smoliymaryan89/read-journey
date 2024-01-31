import { Formik } from "formik";

import clsx from "clsx";
import toast from "react-hot-toast";
import Input from "./ui/Input";
import Button from "./ui/Button";

export interface ReadingFormData {
  page: string | number;
}

interface ReadingFormProps {
  handleReading: (data: ReadingFormData) => void;
  isReadingStarted: boolean;
}

const ReadingForm = ({ handleReading, isReadingStarted }: ReadingFormProps) => {
  return (
    <Formik
      initialValues={{ page: "" }}
      onSubmit={({ page }: ReadingFormData, { resetForm }) => {
        if (typeof page === "string" && !page.trim()) {
          toast.error("Field page required!");
          return;
        }

        handleReading({ page });

        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <>
          <form
            onSubmit={handleSubmit}
            noValidate
            className={clsx(
              "mb-[40px] flex-1 md:mb-0 lg:flex-none lg:w-[313px]"
            )}
          >
            <p className="mb-[8px] ml-[14px] text-10 leading-[1.2] tracking-[-0.2px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px]">
              {isReadingStarted ? "Stop page:" : "Start page:"}
            </p>

            <Input
              id={"page"}
              type="text"
              name="page"
              value={values.page.toString()}
              onChange={handleChange}
              placeholder="0"
              label="Page number:"
              inputStyles="pl-[99px] pr-[14px] md:pl-[111px]"
              wrapperStyles="mb-[20px]"
            />

            <Button
              type="submit"
              title={isReadingStarted ? "To stop" : "To start"}
              primary={false}
              className="!h-[38px] px-[20px] md:!h-[42px] md:px-[28px] md:!text-16 md:!leading-[1.13] md:tracking-[0.32px]"
            />
          </form>
        </>
      )}
    </Formik>
  );
};

export default ReadingForm;
