import { atom } from "recoil";
import { ItemIdListType, ListType, ItemListType } from "@/types/types";

export const viewTypeState = atom<ListType>({
  key: "viewType",
  default: "countries",
});

export const preloaderState = atom<boolean>({
  key: "isPreloader",
  default: true,
});

export const errorState = atom<boolean>({
  key: "error",
  default: false,
});

export const itemsState = atom<ItemListType>({
  key: "items",
  default: [],
});

export const selectedItemsState = atom<ItemIdListType>({
  key: "selectedItems",
  default: [],
});
