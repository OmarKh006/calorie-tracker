import { forwardRef } from "react";
import styles from "./FormInput.module.css";

const FormInput = forwardRef((props, ref) => {
  const { label, id, type, onBlur, isValid } = props;
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input
        className={`${styles["form-input"]} ${!isValid ? styles.error : ""}`}
        type={type}
        id={id}
        onBlur={onBlur}
        ref={ref}
      />
    </>
  );
});

export default FormInput;
