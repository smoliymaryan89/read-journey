import AppPreview from "@components/AppPreview";
import AuthHeader from "@components/AuthHeader";
import RegistrationForm from "@components/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="container py-[20px] md:py-[32px] lg:flex lg:gap-[16px]">
      <div className="px-[20px] pt-[20px] pb-[40px] bg-light-dark rounded-30 mb-[10px] md:mb-0 md:px-[64px] md:pt-[40px] md:pb-[214px] lg:pb-[40px]">
        <AuthHeader />

        <RegistrationForm />
      </div>

      <AppPreview />
    </div>
  );
};

export default RegistrationPage;
