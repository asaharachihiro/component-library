import { createContext, useContext } from "react";

interface FormContextProps {
  formData: Record<string, any>;
  errors: Record<string, string | null>;
  handleInputChange: (id: string, value: string) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
