import "../src/styles/global.scss";
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
            "DateRange",
            "FilePicker",
            "Slider",
            "Form",
          ],
          "Selection",
          ["SelectBox", "MultiSelectBox", "Checkbox", "ToggleSwitch", "Radio"],
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
