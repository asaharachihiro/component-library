import React from "react";
import { Button } from "../../../src/components/_01-action/Button/Button";
import figma from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/3DW5ortH1T3WgHePqou4RY/NUDS-V5?node-id=36-487&t=HwEz7F392NbmBN93-11",
  {
    props: {
      label: figma.string("label"),
      icon: figma.string("icon"),
      isActive: figma.string("isActive"),
      isLoading: figma.string("isLoading"),
      disabled: figma.string("disabled"),
      variant: figma.string("variant"),
      size: figma.string("size"),
    },
    example: (props: any) => {
      return (
        <Button
          label={props.label}
          icon={props.icon}
          variant={props.variant}
          size={props.size}
          disabled={props.disabled}
          isActive={props.isActive}
        />
      );
    },
  }
);
