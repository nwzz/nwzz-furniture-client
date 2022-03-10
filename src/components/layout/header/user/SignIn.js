import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FaSignInAlt } from "react-icons/fa";
import PrimaryButton from "../../../button/PrimaryButton";
import Input from "../../../Input";
import ToggleMode from "./ToggleMode";
import { useHistory, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../../../hooks/context";
import { usePostData } from "../../../../hooks/dataApi";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../../hooks/useAuth";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(8).max(16),
});

const SignIn = ({ setToggle }) => {
  const { signInUsingGoogle } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const value = useGlobalContext();
  const { mutateAsync } = usePostData();
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState([]);

  let { from } = location.state || { from: { pathname: "/user/my-account" } };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const { email, password } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    try {
      const { status, data } = await mutateAsync({
        path: "/auth/signin",
        formData: formData,
      });
      if (status === 200) {
        reset();
        value.setUser(data.token);
        history.push(from);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data.message);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInUsingGoogle();
      const userInfo = {
        fullName: result.user.displayName,
        email: result.user.email,
        avater: result.user.photoURL,
      };
      const { status, data } = await mutateAsync({
        path: "/auth/google/signin",
        formData: userInfo,
      });
      if (status === 200) {
        value.setUser(data.token);
        history.push(from);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3 className="font-medium text-md uppercase text-gray-800">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="my-7">
        <div className="form-col">
          <Input
            name="email"
            type="email"
            placeholder="Email address*"
            register={register}
            errorMessage={email?.message}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password*"
            register={register}
            errorMessage={password?.message}
          />
          <div className="flex gap-10">
            <PrimaryButton
              btnText="LOGIN"
              Icon={FaSignInAlt}
              type="submit"
              btnWidth="w-32"
              disabled={submitting}
            />
            <button
              className="btn-primary"
              type="button"
              onClick={handleGoogleSignIn}
            >
              LOGIN WITH
              <span>
                <FcGoogle size={24} />
              </span>
            </button>
          </div>
        </div>
      </form>

      {setToggle && (
        <ToggleMode
          toogleArray={[
            { label: "CREATE ACCOUNT", value: "signup" },
            { label: "FORGET PASSWORD", value: "forgetpassword" },
          ]}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default SignIn;
