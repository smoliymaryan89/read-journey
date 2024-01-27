export interface SelectData {
  value: string;
  label: string;
}

const selectData: SelectData[] = [
  {
    value: "",
    label: "All books",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "in-progress",
    label: "In progress",
  },
  {
    value: "unread",
    label: "Unread",
  },
];

export default selectData;
