import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { registerUser } from "../store/features/userSlice";
import { toggleForm } from "../store/features/formStateSlice";
import { nanoid } from "@reduxjs/toolkit";
import * as Yup from "yup";
import "./signUp.css";

function SignUp() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userName: "",
      passwordId: "",
      confirmPassword: "",
    },
    // Form validation
    validationSchema: Yup.object({
      firstName: Yup.string()

        .max(15, "Must be 15 characters or less")

        .required("Required"),

      lastName: Yup.string()

        .max(20, "Must be 20 characters or less")

        .required("Required"),

      userName: Yup.string().required("Required"),
      passwordId: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
      confirmPassword: Yup.string().oneOf(
        [Yup.ref("passwordId"), null],
        'Must match "password" field value'
      ),
    }),
    // This is where the form data is stored in state
    onSubmit: (values) => {
      alert("You are now Registered");
      dispatch(
        registerUser({
          id: nanoid(),
          firstName: values.firstName,
          lastName: values.lastName,
          userName: values.userName,
          password: values.passwordId,
        })
      );
      formik.resetForm();
    },
  });
  return (
    <form className="addUserForm" onSubmit={formik.handleSubmit}>
      <div className="inputGroup">
        <input
          id="firstName"
          name="firstName"
          className="form-control"
          placeholder="First Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-danger">{formik.errors.firstName}</div>
        ) : null}

        <input
          id="lastName"
          name="lastName"
          className="form-control"
          placeholder="Last Name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-danger">{formik.errors.lastName}</div>
        ) : null}

        <input
          id="userName"
          name="userName"
          className="form-control"
          placeholder="Username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="text-danger">{formik.errors.userName}</div>
        ) : null}

        <input
          id="passwordId"
          name="passwordId"
          className="form-control"
          placeholder="Password"
          type="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordId}
        />
        {formik.touched.passwordId && formik.errors.passwordId ? (
          <div className="text-danger">{formik.errors.passwordId}</div>
        ) : null}

        <input
          id="confirmPassword"
          name="confirmPassword"
          className="form-control"
          placeholder="Confirm Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-danger">{formik.errors.confirmPassword}</div>
        ) : null}

        <button type="submit" className="btn btn-success">
          Sign Up
        </button>
        <div className="login">
          <p>Already have an account ?</p>
          <button
            onClick={() => dispatch(toggleForm(false))}
            className="btn btn-warning"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
