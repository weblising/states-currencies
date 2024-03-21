export type ItemIdType = string;
export type ListType = "countries" | "currencies";
export type ActionsType = "add" | "remove";
export type ItemIdListType = ItemIdType[];

export type ActionObjType = {
  action: ActionsType;
  id: ItemIdType;
};

export interface ItemType {
  id: ItemIdType;
  bindList: ItemIdListType;
  isSelected: boolean;
}

export type ItemListType = ItemType[];
