interface AlertModalContentProps {
  emoji: string;
  title: string;
  text: string;
}

const AlertModalContent = ({ emoji, title, text }: AlertModalContentProps) => {
  return (
    <>
      <p className="text-50 leading-none tracking-[-1px] mb-[20px] md:text-68 md:leading-[1.03] md:tracking-[-1.36px] md:mb-[32px]">
        {emoji}
      </p>
      <h2 className="text-18 font-gilroy-bold leading-none tracking-[-0.36px] mb-[10px] md:text-20 md:tracking-[-0.4px] md:mb-[14px]">
        {title}
      </h2>
      <p className="text-grey text-14 leading-[1.29] tracking-[-0.28px] text-center">
        {text}
      </p>
    </>
  );
};

export default AlertModalContent;
