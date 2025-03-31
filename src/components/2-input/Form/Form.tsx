import * as React from "react";
import { cn } from "../../../utils/cn";
import { FormContext } from "./FormContext";

interface FormProps {
  id: string;
  formLabel?: string;
  description?: string;
  className?: string;
  supportText?: string;
  children?: React.ReactNode;
  onSubmit?: (formData: Record<string, any>) => void;
  validate?: (formData: Record<string, any>) => Record<string, string | null>; // id: errorText || null 形式で返す
  values?: Record<string, any>;
}

export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    {
      id,
      formLabel = "",
      description = "",
      supportText = "",
      className = "",
      children,
      onSubmit,
      validate,
      values = {},
      ...props
    },
    ref
  ) => {
    const [formData, setFormData] = React.useState<Record<string, any>>({
      values,
    });
    const [errors, setErrors] = React.useState<Record<string, string | null>>(
      {}
    );

    React.useEffect(() => {
      const savedData = localStorage.getItem(id);
      if (savedData) {
        setFormData((prevData) => ({
          ...prevData,
          ...JSON.parse(savedData),
        }));
      } else {
        setFormData(values);
      }
    }, [id, children]);

    const handleInputChange = (id: string, value: string) => {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (validate) {
        const validationResults = validate(formData);
        const hasErrors = Object.values(validationResults).some(
          (error) => error !== null
        );
        if (hasErrors) {
          setErrors(validationResults);
          return;
        }
      }
      if (onSubmit) {
        onSubmit(formData);
      }
      localStorage.setItem(id, JSON.stringify(formData));
    };

    return (
      <FormContext.Provider value={{ formData, errors, handleInputChange }}>
        <div className={cn(className, "space-y-6")} id={id}>
          {formLabel && (
            <label className="block text-lg font-bold">{formLabel}</label>
          )}
          <div className="space-y-1">
            {description && <p className="text-base">{description}</p>}
            {supportText && (
              <p className="mb-6 text-sm text-black-sub">{supportText}</p>
            )}
          </div>
          <form
            ref={ref}
            {...props}
            className="flex-col space-y-2 pl-4"
            onSubmit={handleSubmit}
          >
            {children}
          </form>
        </div>
      </FormContext.Provider>
    );
  }
);
Form.displayName = "Form";
