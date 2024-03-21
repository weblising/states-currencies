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
  const filterQuery: Record<ItemIdType, ListType> = { _id: "countries" };
  try {
    const db = await setConnection();
    const selected = db.collection("selected");
    const selectedCountries = await selected.findOne(filterQuery);
    const selectedCountriesList = selectedCountries?.list;

    let newSelectedCountriesList: ItemIdListType = [];

    if (action === "add") {
      newSelectedCountriesList = [...selectedCountriesList, id];
    } else {
      const itemIndex: number = selectedCountriesList.indexOf(id);
      newSelectedCountriesList = [...selectedCountriesList];
      newSelectedCountriesList.splice(itemIndex, 1);
    }

    await selected.updateOne(filterQuery, {
      $set: { list: newSelectedCountriesList },
    });

    res.status(200).json(newSelectedCountriesList);
  } catch (e) {
    res.status(500);
  }
}
