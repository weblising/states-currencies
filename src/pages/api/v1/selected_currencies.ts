import type { NextApiRequest, NextApiResponse } from "next";
import {
  ListType,
  ItemIdType,
  ActionObjType,
  ItemIdListType,
} from "@/types/types";
import setConnection from "@/DB/setConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { action, id }: ActionObjType = JSON.parse(req.body);
  const filterQuery: Record<ItemIdType, ListType> = { _id: "currencies" };

  try {
    const db = await setConnection();
    const selected = db.collection("selected");
    const selectedCurrencies = await selected.findOne(filterQuery);
    const selectedCurrenciesList = selectedCurrencies?.list;

    let newSelectedCurrenciesiesList: ItemIdListType = [];

    if (action === "add") {
      newSelectedCurrenciesiesList = [...selectedCurrenciesList, id];
    } else {
      const itemIndex: number = selectedCurrenciesList.indexOf(id);
      newSelectedCurrenciesiesList = [...selectedCurrenciesList];
      newSelectedCurrenciesiesList.splice(itemIndex, 1);
    }

    await selected.updateOne(filterQuery, {
      $set: { list: newSelectedCurrenciesiesList },
    });

    res.status(200).json(newSelectedCurrenciesiesList);
  } catch (e) {
    res.status(500);
  }
}
