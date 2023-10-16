import React, { useState } from "react";
import SidebarButton from "./SidebarButton";
import {
  Friends,
  Menu,
  Share,
  Sync,
} from "@/public/theme/white/header_buttons/theme";

type ButtonData = {
  name: string;
  active: boolean;
  pic: any;
};
enum SelectionType {
  SET,
  ONLY,
  MULTIPLE,
}

export const ButtonsList = () => {
  const [buttons, setButtons] = useState<ButtonData[]>([
    { name: "button1", active: false, pic: Friends }, //can be appent without any troubles
    { name: "button2", active: false, pic: Friends },
    { name: "button3", active: false, pic: Friends },
    { name: "button4", active: false, pic: Friends },
    { name: "button5", active: false, pic: Friends },
    { name: "button6", active: false, pic: Friends },
    { name: "button7", active: false, pic: Friends },
    { name: "button8", active: false, pic: Friends },
  ]);
  const [latestSelected, setLatestSelected] = useState<ButtonData>();

  const handleButtonClick = (
    buttonName: string,
    selection: SelectionType = SelectionType.MULTIPLE
  ) => {
    let updatedButtons: ButtonData[];
    let lock = false;
    switch (selection) {
      case SelectionType.MULTIPLE:
        updatedButtons = buttons.map((button) =>
          button.name === buttonName
            ? { ...button, active: !button.active }
            : button
        );

        setButtons(updatedButtons);
        break;
      case SelectionType.ONLY:
        updatedButtons = buttons.map((button) =>
          button.name === buttonName
            ? { ...button, active: !button.active }
            : { ...button, active: false }
        );
        setButtons(updatedButtons);
        break;
      case SelectionType.SET:
        const currentButtonIndex = buttons.findIndex(
          (btn) => btn.name === buttonName
        );
        const latestSelectedIndex = latestSelected
          ? buttons.findIndex((btn) => btn === latestSelected)
          : currentButtonIndex;
        latestSelectedIndex === currentButtonIndex &&
          setLatestSelected(buttons.find((btn) => btn.name === buttonName));
        const startIndex = Math.min(currentButtonIndex, latestSelectedIndex);
        const endIndex = Math.max(currentButtonIndex, latestSelectedIndex);

        buttons.forEach((btn, index) => {
          if (index >= startIndex && index <= endIndex) {
            btn.active = true;
          } else {
            btn.active = false;
          }
        });
        setButtons([...buttons]);
        lock = true;
        break;
    }

    !lock && setLatestSelected(buttons.find((btn) => btn.name === buttonName));
  };

  return (
    <div>
      {buttons.map((button) => (
        <SidebarButton
          Picture={button.pic}
          key={button.name} //TODO fetching items from db for rolling updates (and use uuid instead)
          selected={button.active}
          name={button.name}
          onClick={() => {
            handleButtonClick(button.name, SelectionType.ONLY);
          }}
        />
      ))}
    </div>
  );
};

export default ButtonsList;
