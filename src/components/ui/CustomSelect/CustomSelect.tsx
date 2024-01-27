import { SelectData } from "@utils/data/selectData";
import Select from "react-select";

interface CustomSelectProps {
  options: SelectData[];
  defaultValue: SelectData;
  onChange: (value: SelectData | null) => void;
}

const CustomSelect = ({
  options,
  defaultValue,
  onChange,
}: CustomSelectProps) => {
  return (
    <Select
      options={options}
      classNamePrefix={"custom-select"}
      isSearchable={false}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default CustomSelect;
