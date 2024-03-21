import type { NextApiRequest, NextApiResponse } from "next";
import { ListType, ItemIdType, ItemIdListType } from "@/types/types";
import setConnection from "@/DB/setConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await setConnection();
    const currencies = await db.collection("currencies").find({}).toArray();
    const selected = db.collection("selected");

    const filterQuery: Record<ItemIdType, ListType> = { _id: "currencies" };
    const selectedCurrencies = await selected.findOne(filterQuery);
    const selectedCurrenciesList: ItemIdListType = selectedCurrencies?.list;

    const itemList = currencies.map((currency) => {
      const { _id, countries } = currency;

      return {
        id: _id,
        bindList: countries,
        isSelected: selectedCurrenciesList.includes(_id.toString()),
      };
    });


    res.status(200).json(itemList);
  } catch (e) {
    res.status(500);
  }
}
