import { FC, ReactElement } from "react";
import { ListType } from "@/types/types";

type Props = {
  type: ListType;
  clickHandler: (par: ListType) => void;
};

const SwitcherToggler: FC<Props> = ({ type, clickHandler }): ReactElement => {
  return (
    <span
      className="switcher__toggler"
      onClick={() => {
        clickHandler(type);
      }}
    ></span>
  );
};

export default SwitcherToggler;
