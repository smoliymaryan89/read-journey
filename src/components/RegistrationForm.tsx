import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { registerValidation } from "@utils/schemas/authValidation";
import { useAppDispatch } from "@hooks/useRedux";
import { register } from "@store/auth/authOperations";
import { UserRegisterData } from "types/auth";

import clsx from "clsx";
import toast from "react-hot-toast";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import AuthErrorMessage from "./AuthErrorMessage";
import AuthIconValidation from "./ui/AuthIconValidation";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={registerValidation}
      onSubmit={async (
        { name, email, password }: UserRegisterData,
        { resetForm }
      ) => {
        if (!name.trim() || !email.trim() || !password.trim()) {
          return;
        }

        try {
          await dispatch(register({ name, email, password })).unwrap();
          resetForm();
        } catch (error) {
          toast.error(error as string);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} noValidate className="md:w-[472px]">
          <Input
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Name:"
            inputStyles={clsx(
              "pl-[59px] pr-[50px] md:pl-[65px]",
              touched.name && errors.name && "!border-red",
              touched.name && !errors.name && "!border-green"
            )}
            wrapperStyles={clsx(
              touched.name && errors.name
                ? "mb-[20px] md:mb-[30px]"
                : "mb-[8px] md:mb-[14px]"
            )}
          >
            <AuthIconValidation touched={touched.name} errors={errors.name} />

            {touched.name && errors.name ? (
              <AuthErrorMessage message={errors.name} />
            ) : null}
          </Input>

          <Input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mail:"
            inputStyles={clsx(
              "pl-[49px] pr-[50px] md:pl-[53px]",
              touched.email && errors.email && "!border-red",
              touched.email && !errors.email && "!border-green"
            )}
            wrapperStyles={clsx(
              touched.email && errors.email
                ? "mb-[20px] md:mb-[30px]"
                : "mb-[8px] md:mb-[14px]"
            )}
          >
            <AuthIconValidation touched={touched.email} errors={errors.email} />

            {touched.email && errors.email ? (
              <AuthErrorMessage message={errors.email} />
            ) : null}
          </Input>

          <Input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            touched={touched.password}
            errors={errors.password}
            label="Password:"
            inputStyles={clsx(
              "pl-[78px] pr-[50px] md:pl-[86px]",
              touched.password &&
                errors.password &&
                "!border-red pr-[70px] md:pr-[75px]",
              touched.password &&
                !errors.password &&
                "!border-green pr-[70px] md:pr-[75px]"
            )}
            icon={true}
            wrapperStyles={clsx(
              "md:mb-[82px]",
              touched.password && errors.password ? "mb-[32px]" : "mb-[32px]"
            )}
          >
            <AuthIconValidation
              touched={touched.password}
              errors={errors.password}
            />

            {touched.password && errors.password ? (
              <AuthErrorMessage message={errors.password} />
            ) : touched.password && !errors.password ? (
              <AuthErrorMessage message="Password is secure" isError={false} />
            ) : null}
          </Input>

          <div className="flex flex-wrap gap-[14px] items-center sm:justify-center md:gap-[20px]">
            <Button
              type="submit"
              title="Registration"
              className="px-[28px] md:px-[54px]"
              primary={true}
            />
            <Link
              to={"/login"}
              className="text-grey text-12 underline leading-[1.17] tracking-[-0.24px] hover:text-current transition-colors duration-350 md:text-14 md:leading-[1.29] md:tracking-[-0.28px]"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
