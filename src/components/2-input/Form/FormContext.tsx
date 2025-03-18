import { createContext, useContext } from "react";

interface FormContextProps {
  formData: Record<string, any>;
  errors: Record<string, string | null>;
  handleInputChange: (id: string, value: string) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);
export const useFormContext = (): FormContextProps | undefined => {
  return useContext(FormContext);
};
// Formを使用しない場合、各コンポーネントでundefinedに対応してください。
