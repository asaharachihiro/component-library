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
          ["TextBox", "SeachBox", "DatePicker", "FilePicker", "Slider", "Form"],
          "Selection",
          ["SelectBox", "CheckBox", "ToggleSwitch", "RadioButton"],
          "List",
          ["List", "Accordion", "Card", "Table", "FilterButton"],
          "Notification",
          ["Badge", "Tag", "Dialog", "Toast", "Tooltip", "MeatballMenu"],
          "Navigation",
          ["MenuBar", "SideMenu", "Breadcrumbs", "Stepper"],
          "Display",
          ["Tabs", "Mordal", "Pagenation"],
          "Loading",
          ["Spinner", "ProgressBar", "Skeleton"],
        ],
      ],
    },
  },
};
export const tags = ["autodocs"];
