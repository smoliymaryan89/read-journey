import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import {
  useAddNewBookMutation,
  useGetOwnBooksQuery,
} from "@store/book/bookSlice";
import { selectModal } from "@store/modal/modalSelectors";
import { toggleModal } from "@store/modal/modalSlice";
import { Book } from "types/book";

import clsx from "clsx";
import toast from "react-hot-toast";
import selectData, { SelectData } from "@utils/data/selectData";
import AddBookForm, { AddFormData } from "@components/AddBookForm";
import BookItem from "@components/BookItem";
import BookList from "@components/BookList";
import Dashboard from "@components/Dashboard";
import Modal from "@components/Modal";
import NoOwnBooks from "@components/NoOwnBooks";
import Recommendations from "@components/Recommendations";
import CustomSelect from "@components/ui/CustomSelect/CustomSelect";
import AlertModalContent from "@components/AlertModalContent";

const LibraryPage = () => {
  const [select, setSelect] = useState<SelectData | null>(null);
  const [modalData, setModalData] = useState<Book | null>(null);

  const dispatch = useAppDispatch();
  const { isOpen, modalName } = useAppSelector(selectModal);

  const { data: ownBooks } = useGetOwnBooksQuery({
    status: select?.value ?? "",
  });
  const [addNewBook] = useAddNewBookMutation();

  const handleSelect = (value: SelectData | null) => {
    if (value !== null) {
      setSelect(value);
    }
  };

  const handleModal = (data?: Book) => {
    setModalData(data ?? null);
    dispatch(toggleModal("ownBook"));
  };

  const handleAddBook = ({ title, author, totalPages }: AddFormData) => {
    const totalPagesAsNumber =
      typeof totalPages === "string" ? parseFloat(totalPages) : totalPages;

    addNewBook({ title, author, totalPages: totalPagesAsNumber })
      .unwrap()
      .then(() => {
        dispatch(toggleModal("addBook"));
      })
      .catch((e) => {
        toast.error(e.data.message);
      });
  };

  return (
    <>
      <Dashboard className="lg:gap-[78px]">
        <AddBookForm handleAddBook={handleAddBook} />
        <Recommendations />
      </Dashboard>

      <section className="section">
        <div
          className={clsx(
            "flex justify-between",
            ownBooks?.length === 0
              ? "mb-[63px] md:mb-[86px] lg:mb-[147px]"
              : "mb-[14px]"
          )}
        >
          <h1 className="title">My library</h1>
          <CustomSelect
            options={selectData}
            defaultValue={selectData[0]}
            onChange={handleSelect}
          />
        </div>

        {ownBooks?.length === 0 && <NoOwnBooks />}

        {ownBooks && (
          <BookList
            books={ownBooks}
            isButton={true}
            handleModal={handleModal}
          />
        )}
      </section>

      {isOpen && modalName === "ownBook" && modalData && (
        <Modal handleModal={handleModal}>
          <BookItem
            isModal={true}
            handleModal={handleModal}
            className={{
              item: "w-[194px] md:w-[317px]",
              img: "h-[213px] w-[140px] mb-[16px] mx-auto md:w-[153px] md:h-[233px]",
              description: "mb-[20px] md:mb-[32px]",
              title:
                "text-center mb-[2px] text-18 overflow-visible !whitespace-normal font-gilroy-bold leading-none tracking-[-0.36px] md:text-20 md:tracking-[-0.4px]",
              text: "text-center mb-[4px] text-grey text-12 leading-[1.17] tracking-[-0.24px] md:text-14 md:leading-[1.29] md:tracking-[-0.28px]",
            }}
            {...modalData}
          />
        </Modal>
      )}

      {isOpen && modalName === "addBook" && (
        <Modal
          handleModal={() => dispatch(toggleModal("addBook"))}
          className="py-[60px] px-[46px] md:!w-[342px] md:px-[50px]"
        >
          <AlertModalContent
            emoji="👍"
            title="Good job"
            text="Your book is now in the library! The joy knows no bounds
            and now you can start your training"
          />
        </Modal>
      )}
    </>
  );
};

export default LibraryPage;
