import { FC, ReactElement, MouseEventHandler, useState } from "react";
import { ActionsType, ItemType } from "@/types/types";
import Image from "next/image";

import { useRecoilState } from "recoil";
import { selectedItemsState, viewTypeState, errorState } from "@/store/store";
import {
  setSelectedCountries,
  setSelectedCurrencies,
} from "@/services/services";
import "@/scss/item.scss";

type Props = {
  item: ItemType;
};
const MainListItemControl: FC<Props> = ({ item }): ReactElement => {
  const { id } = item;
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  const [listType] = useRecoilState(viewTypeState);
  const [isError, setError] = useRecoilState(errorState);
  const isSelected = selectedItems.includes(id);
  const [isToggleDisabled, setToggleDisabled] = useState<boolean>(false);

  const action: ActionsType = isSelected ? "remove" : "add";

  const toggleSelectedItem: MouseEventHandler<HTMLDivElement> = () => {
    const setSelectedItemsServer =
      listType === "countries" ? setSelectedCountries : setSelectedCurrencies;

    const setSelectedItemsToServer = async () => {
      setToggleDisabled(true);
      try {
        const selectedItemsData = await setSelectedItemsServer(action, id);

        if (Array.isArray(selectedItemsData)) {
          setSelectedItems(selectedItemsData);
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      } finally {
        setToggleDisabled(false);
      }
    };

    setSelectedItemsToServer();
  };

  return (
    <>
      <span
        className={`item__mask${isToggleDisabled ? " item__mask_active" : ""}`}
      ></span>
      <div className="item__control" onClick={toggleSelectedItem}>
        <Image
          src={`/icons/${isSelected ? "check-square.svg" : "square.svg"}`}
          className="item__check-img"
          height={16}
          width={16}
          alt="CheckBox"
        />
      </div>
    </>
  );
};
export default MainListItemControl;
