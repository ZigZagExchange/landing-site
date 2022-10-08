import React, { useState } from "react";
import classNames from "classnames";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { useFormik } from "formik";
import * as yup from "yup";
import styles from "./contactForm.module.css";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
    onSubmit: () => {
      setMessage("Form submitted");
      setSubmitted(true);
    },
    validationSchema: yup.object({
      name: yup.string().trim().required("Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      subject: yup.string().trim().required("Subject is required"),
      message: yup.string().trim().required("Message is required"),
    }),
  });
  return (
    <div className={styles.contactForm}>
      <div className="w-11/12 2xl:w-5/12 xl:w-6/12 lg:mb-20 lg:w-9/12 md:w-10/12">
        <p className="mx-8 mt-10 text-4xl font-semibold tracking-wider text-center md:mt-20 md:mx-4 md:text-5xl">
          Jobs & Collaborations
        </p>
        <p className="mt-4 text-base font-light tracking-wider text-center md:text-xl ">
          We looking for talented developers, designers and crypto marketing
          geniuses. Contact with us on social media or via email.
        </p>
        <div className="flex flex-col items-center mt-10">
          <form className="w-10/12" onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="block mb-2 text-sm font-work">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 text-sm tracking-wider rounded-lg border-y border-x dark:border-0 dark:text-foreground-900 bg-foreground-100 dark:border-foreground-400 border-background-600 font-work"
                placeholder="John Smith"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && (
                <div className="mt-1 text-xs text-danger-900 font-work">
                  {formik.errors.name}
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-work">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full p-2 text-sm tracking-wider rounded-lg border-y border-x dark:border-0 dark:text-foreground-900 bg-foreground-100 dark:border-foreground-400 border-background-600 font-work"
                placeholder="john.smith@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && (
                <div className="mt-1 text-xs text-danger-900 font-work">
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-work">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="w-full p-2 text-sm tracking-wider rounded-lg border-y border-x dark:border-0 dark:text-foreground-900 bg-foreground-100 dark:border-foreground-400 border-background-600 font-work"
                placeholder="Write your subject here."
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && (
                <div className="mt-1 text-xs text-danger-900 font-work">
                  {formik.errors.subject}
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block mb-2 text-sm font-work">
                Message
              </label>
              <textarea
                name="message"
                className="w-full p-2 text-sm tracking-wider rounded-lg border-y border-x dark:border-0 dark:text-foreground-900 bg-foreground-100 dark:border-foreground-400 border-background-600 font-work"
                placeholder="Write your message here."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.message && (
                <div className="mt-1 text-xs text-danger-900 font-work">
                  {formik.errors.message}
                </div>
              )}
            </div>

            <button
              type="submit"
              className={classNames(
                " py-2 px-4 font-work text-xs float-right ",
                styles.button
              )}
            >
              Send{" "}
              <ArrowNarrowRightIcon className="inline-block w-4 h-4 mb-px ml-px" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
