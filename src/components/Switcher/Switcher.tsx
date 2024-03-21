import { FC, ReactElement } from "react";
import { ListType } from "@/types/types";
import { useRecoilState } from "recoil";
import { viewTypeState, preloaderState } from "@/store/store";
import SwitcherNavButton from "@/components/Switcher/SwitcherNavButton";
import SwitcherToggler from "@/components/Switcher/SwitcherToggler";
import "./switcher.scss";

const Switcher: FC = (): ReactElement => {
  const [listType, setListType] = useRecoilState(viewTypeState);
  const [isLoading, setLoading] = useRecoilState(preloaderState);

  const clickHandler = (newListType: ListType) => {
    if (newListType === listType) {
      return;
    }
    setListType(newListType);
    setLoading(true);
  };

  return (
    <div className={`switcher${isLoading ? " switcher_disabled" : ""}`}>
      <SwitcherNavButton
        clickHandler={clickHandler}
        type={"countries"}
        listType={listType}
        isDisabled={isLoading}
      />
      <div className="switcher__inner">
        <SwitcherToggler clickHandler={clickHandler} type={"countries"} />
        <span className={`switcher__bar switcher__bar_pos_${listType}`}></span>
        <SwitcherToggler clickHandler={clickHandler} type={"currencies"} />
      </div>
      <SwitcherNavButton
        clickHandler={clickHandler}
        type={"currencies"}
        listType={listType}
        isDisabled={isLoading}
      />
    </div>
  );
};

export default Switcher;
