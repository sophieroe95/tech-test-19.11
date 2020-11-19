import React from "react";
import { useForm } from 'react-hook-form';
import styles from "./Quiz.module.scss";

const Quiz = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label>What is the best food?</label>
      <input type="answer" placeholder="answer" name="answer" ref={register({ required: true, pattern: { value: /pizza/i, message: "has to be pizza", } })} />
      {errors.answer && errors.answer.type === "required" && <span>This is required</span>}
      {errors.answer && errors.answer.type === "pattern" && <span>It has to be pizza!</span>}
      <input type="submit" />
    </form>
  );
}

export default Quiz;