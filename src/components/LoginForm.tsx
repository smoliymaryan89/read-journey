import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { loginValidation } from "@utils/schemas/authValidation";
import { useAppDispatch } from "@hooks/useRedux";
import { login } from "@store/auth/authOperations";
import { UserLoginData } from "types/auth";

import clsx from "clsx";
import toast from "react-hot-toast";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import AuthErrorMessage from "./AuthErrorMessage";
import AuthIconValidation from "./ui/AuthIconValidation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async ({ email, password }: UserLoginData, { resetForm }) => {
        if (!email.trim() || !password.trim()) {
          return;
        }
        try {
          await dispatch(login({ email, password })).unwrap();

          resetForm();
        } catch (error) {
          toast.error(error as string);
        }

        resetForm();
      }}
      validationSchema={loginValidation}
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
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Mail:"
            wrapperStyles={clsx(
              touched.email && errors.email
                ? "mb-[20px] md:mb-[30px]"
                : "mb-[8px] md:mb-[14px]"
            )}
            inputStyles={clsx(
              "pl-[49px] pr-[50px] md:pl-[53px]",
              touched.email && errors.email && "!border-red",
              touched.email && !errors.email && "!border-green"
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
            label="Password:"
            icon={true}
            touched={touched.password}
            errors={errors.password}
            inputStyles={clsx(
              "pl-[78px] pr-[50px] md:pl-[86px]",
              touched.password &&
                errors.password &&
                "!border-red pr-[70px] md:pr-[75px]",
              touched.password &&
                !errors.password &&
                "!border-green pr-[70px] md:pr-[75px]"
            )}
            wrapperStyles="mb-[72px] md:mb-[146px]"
          >
            <AuthIconValidation
              touched={touched.password}
              errors={errors.password}
            />

            {touched.password && errors.password ? (
              <AuthErrorMessage message={errors.password} />
            ) : null}
          </Input>

          <div className="flex flex-wrap gap-[14px] items-center sm:justify-center md:gap-[20px]">
            <Button
              type="submit"
              title="Log in"
              className="px-[45px] md:px-[54px]"
              primary={true}
            />
            <Link
              to={"/register"}
              className="text-grey text-12 underline leading-[1.17] tracking-[-0.24px] hover:text-current transition-colors duration-350 md:text-14 md:leading-[1.29] md:tracking-[-0.28px]"
            >
              Don't have an account?
            </Link>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
