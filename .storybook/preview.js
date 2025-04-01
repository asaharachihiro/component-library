import "../src/styles/global.css";
export const parameters = {
  controls: { expanded: true },
  options: {
    storySort: {
      order: [
        "Components",
        [
          "Action",
          ["Button", "IconButton", "Link"],
          "Input",
          [
            "TextBox",
            "PasswordBox",
            "SearchBox",
            "DatePicker",
            "FilePicker",
            "Slider",
            "Form",
          ],
          "Selection",
          ["SelectBox", "Checkbox", "ToggleSwitch", "Radio"],
          "List",
          ["List", "Accordion", "Card", "Table", "FilterButton"],
          "Notification",
          ["Badge", "Tag", "Dialog", "Toast", "Tooltip", "MeatballMenu"],
          "Navigation",
          ["Topbar", "Sidebar", "Breadcrumbs", "Stepper"],
          "Display",
          ["Tab", "Modal", "Pagenation"],
          "Loading",
          ["Spinner", "ProgressBar", "Skeleton"],
        ],
      ],
    },
  },
};
export const tags = ["autodocs"];
