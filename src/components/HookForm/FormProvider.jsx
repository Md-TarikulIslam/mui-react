import { FormProvider as Form } from "react-hook-form";

const FormProvider = ({ methods, children, onSubmit, className }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </Form>
  );
};

export default FormProvider;
