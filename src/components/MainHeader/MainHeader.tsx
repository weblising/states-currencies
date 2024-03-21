import { FC, ReactElement, useEffect } from "react";
import { ItemIdListType } from "@/types/types";
import { useRecoilState } from "recoil";
import {
  viewTypeState,
  preloaderState,
  errorState,
  selectedItemsState,
  itemsState,
} from "@/store/store";

import PageHeader from "../PageHeader/PageHeader";
import { getCountries, getCurrencies } from "@/services/services";

const MainContent: FC = (): ReactElement => {
  const [listType] = useRecoilState(viewTypeState);
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemsState);
  const [isLoading, setLoading] = useRecoilState(preloaderState);
  const [isError, setError] = useRecoilState(errorState);
  const [items, setItems] = useRecoilState(itemsState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemsData =
          listType === "countries"
            ? await getCountries()
            : await getCurrencies();

        if (Array.isArray(itemsData)) {
          setItems(itemsData);
          const selectedItems: ItemIdListType = [];
          itemsData.forEach((item) => {
            item.isSelected && selectedItems.push(item.id);
          });
          setSelectedItems(selectedItems);
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [listType]);

  return <PageHeader />;
};
export default MainContent;
