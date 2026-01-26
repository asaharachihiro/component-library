import React from "react";
import { NumberButton } from "../../../src/components/_00-common/NumberButton";
import figma from "@figma/code-connect";

figma.connect(
  NumberButton,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=81-96&t=Z56zjxz3GSyTpBhU-4",
  {
    props: {
      number: figma.string("number"),
      selected: figma.enum("selected", {
        false: false,
        true: true,
      }),
      isToday: figma.enum("isToday", {
        false: false,
        true: true,
      }),
      disabled: figma.enum("diabled", {
        false: false,
        true: true,
      }),
      isFocused: figma.enum("isFocused", {
        false: false,
        true: true,
      }),
    },
    example: (props) => (
      <NumberButton
        id={"id"}
        number={props.number}
        selected={props.selected}
        isToday={props.isToday}
        disabled={props.disabled}
        isFocused={props.isFocused}
      />
    ),
  }
);
