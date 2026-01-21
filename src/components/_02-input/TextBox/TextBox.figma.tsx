import React from "react";
import { TextBox } from "./TextBox";
import figma from "@figma/code-connect";

figma.connect(
  TextBox,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=89%3A1768",
  {
    props: {
      label: figma.string("label"),
      isRequired: figma.string("isRequired"),
      placeholder: figma.string("placeholder"),
      supportMessage: figma.string("supportMessage"),
      errorMessage: figma.string("errorMessage"),
      value: figma.string("value"),
      isInvalid: figma.boolean("isInvalid"),
      disabled: figma.boolean("disabled"),
    },
    example: (props: any) => (
      <TextBox
        id={"example-textbox"}
        supportMessage={props.supportMessage}
        errorMessage={props.errorMessage}
        label={props.label}
        isRequired={props.isRequired === "true"}
        placeholder={props.placeholder}
        value={props.value}
        isInvalid={props.isInvalid === "true"}
        disabled={props.disabled === "true"}
      />
    ),
  }
);
