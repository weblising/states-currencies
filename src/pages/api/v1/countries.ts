import type { NextApiRequest, NextApiResponse } from "next";
import { ListType, ItemIdType, ItemIdListType } from "@/types/types";
import setConnection from "@/DB/setConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = await setConnection();
    const countries = await db.collection("countries").find({}).toArray();
    const selected = db.collection("selected");

    const filterQuery: Record<ItemIdType, ListType> = { _id: "countries" };
    const selectedCountries = await selected.findOne(filterQuery);
    const selectedCountriesList: ItemIdListType = selectedCountries?.list;

    const itemList = countries.map((country) => {
      const { _id, currencies } = country;

      return {
        id: _id,
        bindList: currencies,
        isSelected: selectedCountriesList.includes(_id.toString()),
      };
    });

    res.status(200).json(itemList);
  } catch (e) {
    res.status(500);
  }
}
