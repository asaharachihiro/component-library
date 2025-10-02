import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  FormContext,
  useFormContext,
} from "../../../src/components/_02-input/Form/FormContext";

describe("FormContext", () => {
  it("formDataの初期値が渡る", () => {
    const TestComponent = () => {
      const ctx = useFormContext();
      return <div>{ctx?.formData.foo}</div>;
    };
    render(
      <FormContext.Provider
        value={{
          formData: { foo: "bar" },
          errors: {},
          handleInputChange: () => {},
        }}
      >
        <TestComponent />
      </FormContext.Provider>
    );
    expect(screen.getByText("bar")).toBeInTheDocument();
  });

  it("errorsの初期値が渡る", () => {
    const TestComponent = () => {
      const ctx = useFormContext();
      return <div>{ctx?.errors.foo}</div>;
    };
    render(
      <FormContext.Provider
        value={{
          formData: {},
          errors: { foo: "error" },
          handleInputChange: () => {},
        }}
      >
        <TestComponent />
      </FormContext.Provider>
    );
    expect(screen.getByText("error")).toBeInTheDocument();
  });

  it("handleInputChangeでformDataが更新される", async () => {
    const TestProvider: React.FC<{ children: React.ReactNode }> = ({
      children,
    }) => {
      const [formData, setFormData] = React.useState({ foo: "bar" });
      const handleInputChange = (id: string, value: string) => {
        setFormData((prev) => ({ ...prev, [id]: value }));
      };
      return (
        <FormContext.Provider
          value={{ formData, errors: {}, handleInputChange }}
        >
          {children}
        </FormContext.Provider>
      );
    };

    const TestComponent = () => {
      const ctx = useFormContext();
      return (
        <div>
          <span>{ctx?.formData.foo}</span>
          <button onClick={() => ctx?.handleInputChange("foo", "baz")}>
            change
          </button>
        </div>
      );
    };

    render(
      <TestProvider>
        <TestComponent />
      </TestProvider>
    );
    expect(screen.getByText("bar")).toBeInTheDocument();
    screen.getByText("change").click();
    // 状態更新を待つ
    expect(await screen.findByText("baz")).toBeInTheDocument();
  });

  it("useFormContextがProvider外だとundefinedを返す", () => {
    const TestComponent = () => {
      const ctx = useFormContext();
      return <div>{ctx === undefined ? "undefined" : "defined"}</div>;
    };
    render(<TestComponent />);
    expect(screen.getByText("undefined")).toBeInTheDocument();
  });
});
