import * as React from "react";
import { cn } from "../../../utils/cn";
import { ErrorText } from "../../0-common";

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
        setFormData(JSON.parse(savedData));
      } else {
        setFormData(values);
      }
    }, [id, children, values]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
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

    const renderChildren = () => {
      const inputChildren: React.ReactNode[] = [];
      let buttonChild: React.ReactNode = null;

      React.Children.forEach(children, (child) => {
        if ((child as React.ReactElement<any>).props.type === "submit") {
          buttonChild = child;
        } else {
          const childProps = child as React.ReactElement<any>;
          const error = errors[childProps.props.id];
          inputChildren.push(
            <div
              key={childProps.props.id}
              className={cn("rounded-lg p-1", error && "bg-danger-light")}
            >
              {React.cloneElement(childProps, {
                onChange: handleInputChange,
                value: formData[childProps.props.id] || "",
                error: error || null,
              })}
              {error && <ErrorText text={error} />}
            </div>
          );
        }
      });

      return { inputChildren, buttonChild };
    };

    const { inputChildren, buttonChild } = renderChildren();

    return (
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
          {inputChildren}
          {buttonChild && (
            <div id="submitButton" className="flex justify-end pt-4">
              {buttonChild}
            </div>
          )}
        </form>
      </div>
    );
  }
);
Form.displayName = "Form";
