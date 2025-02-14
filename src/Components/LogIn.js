import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../store/features/formStateSlice";
import { login } from "../store/features/userSlice";
import * as Yup from "yup";
import "./login.css";
import SignUp from "./SignUp";

function LogIn() {
  const dispatch = useDispatch();
  const showSignIn = useSelector((state) => state.toggleSignIn);
  const validateUser = useSelector((state) => state.addUser);
  const validUserName = validateUser.user.userName;
  const validPassword = validateUser.user.password;

  // ------------------------------------------------ Logout -------------------------------------

  // depending on login state either, welcome section will be displayed or the login section
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Required"),
      password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
    }),

    onSubmit: (values) => {
      if (values.userName === validUserName) {
        if (values.password === validPassword) {
          formik.resetForm();
          dispatch(login(true));
          alert("check out our products " + validateUser.user.firstName);
          return;
        } else {
          alert("Password is incorrect, please try again");
        }
      } else {
        formik.resetForm();
        alert("User name is incorrect, please try again");

        return;
      }
    },
  });
  return (
    <div className="addUser text-center">
      <div className={!showSignIn.isVisible ? "show" : "hidden"}>
        <form className="addUserForm" onSubmit={formik.handleSubmit}>
          <div className="inputGroup">
            <input
              id="userName"
              name="userName"
              className="form-control"
              placeholder="Username"
              type="username"
              onChange={formik.handleChange}
              value={formik.values.userName}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="text-danger">{formik.errors.userName}</div>
            ) : null}

            <input
              id="password"
              name="password"
              className="form-control"
              placeholder="Password"
              type="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}

            <button type="submit" className="btn btn-success">
              Login
            </button>
            <div className="signUp">
              <div className="row"></div>
              <p>Don't have an account ?</p>
              <button
                onClick={() => dispatch(toggleForm(true))}
                className="btn btn-warning"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={showSignIn.isVisible ? "show" : "hidden"}>
        <SignUp />
      </div>
    </div>
  );
}

export default LogIn;
