import { createContext, useContext } from "react";

interface FormContextProps<T = any> {
  formData: Record<string, T>;
  errors: Record<string, string | null>;
  handleInputChange: (id: string, value: T) => void;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);
export const useFormContext = (): FormContextProps | undefined => {
  return useContext(FormContext);
};
// Formを使用しない場合、各コンポーネントでundefinedに対応してください。
