import React, { useCallback } from "react";
import isEmail from "validator/lib/isEmail";
//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [fetchError, setFetchError] = React.useState("");
  const handleChange = (event) => {
    setFetchError("");
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "email" && !isEmail(value)) {
      setErrors({ ...errors, [name]: "Неверный шаблон email" });
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
    }
    setValues({ ...values, [name]: value });

    setIsValid(target.closest("form").checkValidity() && isEmail(value));
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    fetchError,
    setFetchError,
    setValues,
  };
}
