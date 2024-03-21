import { FC, ReactElement } from "react";
import { ListType } from "@/types/types";

type Props = {
  type: ListType;
  clickHandler: (par: ListType) => void;
  listType: ListType;
  isDisabled: boolean;
};

const SwitcherButton: FC<Props> = ({
  type,
  clickHandler,
  listType,
  isDisabled,
}): ReactElement => {
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`switcher__btn${
        listType === type ? " switcher__btn_active" : ""
      }`}
      onClick={() => {
        clickHandler(type);
      }}
    >
      {type}
    </button>
  );
};

export default SwitcherButton;
