// import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(2, "Name must have atleast 2 character")
        .required("Name is required"),
      email: yup
        .string()
        .email("Enter valid Email")
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "password must have atleast 6 character")
        .required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(
        JSON.stringify(`${values.name}, ${values.email}, ${values.password}`)
      );
      resetForm({ values: "" });
    },
  });

  // console.error(formik.errors);
  const renderNameError = formik.touched.name && formik.errors.name && (
    <span>{formik.errors.name}</span>
  );
  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span>{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password &&
    formik.errors.password && <span>{formik.errors.password}</span>;

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        {renderNameError}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        {renderEmailError}
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        {renderPasswordError}
        <div>
          <button type="submit" className="btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
