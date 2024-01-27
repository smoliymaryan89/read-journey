import { Formik } from "formik";
import Input from "./ui/Input";
import Button from "./ui/Button";

export interface FilterData {
  title: string;
  author: string;
}

interface FilterFormProps {
  handleFilter: (data: FilterData) => void;
}

const FilterForm = ({ handleFilter }: FilterFormProps) => {
  return (
    <Formik
      initialValues={{ title: "", author: "" }}
      onSubmit={({ title, author }: FilterData) => {
        handleFilter({ title: title.trim(), author: author.trim() });
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mb-[20px] flex-1 md:mb-0"
          >
            <p className="mb-[8px] ml-[14px] text-10 leading-[1.2] tracking-[-0.2px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px]">
              Filters:
            </p>
            <Input
              id={"title"}
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Enter text"
              label="Book title:"
              inputStyles="pl-[77px] pr-[14px] md:pl-[86px]"
              wrapperStyles="mb-[8px]"
            />
            <Input
              id={"author"}
              type="text"
              name="author"
              value={values.author}
              onChange={handleChange}
              placeholder="Enter text"
              label="The author:"
              inputStyles="pl-[85px] pr-[14px] md:pl-[95px]"
              wrapperStyles="mb-[20px]"
            />

            <Button
              type="submit"
              title="To apply"
              primary={false}
              className="!h-[38px] px-[20px] md:!h-[42px] md:px-[28px] md:!text-16 md:!leading-[1.13] md:tracking-[0.32px]"
            />
          </form>
        </>
      )}
    </Formik>
  );
};

export default FilterForm;
