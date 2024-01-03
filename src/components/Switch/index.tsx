import { useState } from "react";
import { Input, Label, Switch } from "./switch.style";

export const ToggleSwitch = ({
  onChange,
  checked,
}: {
  onChange: any;
  checked: boolean;
}) => {
  // const [checked, setChecked] = useState(false);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.stopPropagation();
  //   setChecked(e.target.checked);
  // };

  return (
    <Label htmlFor="toggle-switch">
      <Input
        id="toggle-switch"
        checked={checked}
        type="checkbox"
        onClick={onChange}
      />
      <Switch />
    </Label>
  );
};
