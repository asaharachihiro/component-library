import React from "react";
import { CheckIcon } from "../../../src/components/_00-common/CheckIcon";
import figma from "@figma/code-connect";

figma.connect(
  CheckIcon,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=72-105&t=Z56zjxz3GSyTpBhU-4",
  {
    props: {
      checked: figma.enum("checked", {
        false: false,
        true: true,
        indeterminate: "indeterminate",
      }),
      disabled: figma.enum("disabled", {
        false: false,
        true: true,
      }),
      isInvalid: figma.enum("isInvalid", {
        false: false,
        true: true,
      }),
    },
    example: (props) => (
      <CheckIcon
        id={"id"}
        checked={props.checked}
        disabled={props.disabled}
        isInvalid={props.isInvalid}
      />
    ),
  }
);
