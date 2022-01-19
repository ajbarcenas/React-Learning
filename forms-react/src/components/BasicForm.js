import React from "react";
import useMine from "../hooks/use-mine";

const BasicForm = (props) => {
  const {
    value: enteredFirst,
    isTouched: firstTouched,
    valueIsValid: firstValid,
    hasError: firstError,
    valueChangeHandler: firstChangeHandler,
    valueBlurHandler: firstBlurHandler,
    reset: firstReset,
  } = useMine((value) => value.trim() !== "");

  const {
    value: enteredLast,
    isTouched: lastTouched,
    valueIsValid: lastValid,
    hasError: lastError,
    valueChangeHandler: lastChangeHandler,
    valueBlurHandler: lastBlurHandler,
    reset: lastReset,
  } = useMine((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isTouched: emailTouched,
    valueIsValid: emailValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useMine((value) => value.includes("@"));

  let isFormValid = false;

  if (firstValid && lastValid && emailValid) isFormValid = true;

  const submitHandler = (e) => {
    e.preventDefault();

    firstReset();
    lastReset();
    emailReset();
  };

  const firstClasses = firstError ? "form-control invalid" : "form-control";
  const lastClasses = lastError ? "form-control invalid" : "form-control";
  const emailClasses = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={enteredFirst}
          />
          {firstError && <p>Name field cannot be empty.</p>}
        </div>
        <div className={lastClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLast}
          />
          {lastError && <p>Name field cannot be empty.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailError && <p>Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
