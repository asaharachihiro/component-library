import React from "react";
import { FormLabel } from "../../../src/components/_00-common/FormLabel";
import figma from "@figma/code-connect";

figma.connect(
  FormLabel,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=47-98",
  {
    props: {
      label: figma.string("label"),
      isRequired: figma.enum("isRequired", {
        true: true,
        false: false,
      }),
    },
    example: (props) => (
      <FormLabel label={props.label} isRequired={props.isRequired} />
    ),
  }
);
