import {
  ItemIdType,
  ActionsType,
  ItemIdListType,
  ItemListType,
} from "@/types/types";

export async function getCountries(): Promise<ItemListType | undefined> {
  try {
    const res = await fetch(`/api/v1/countries`, {
      next: { revalidate: 1 },
    });
    if (!res.ok) {
      return;
    }
    const countries: ItemListType = await res.json();
    return countries;
  } catch (e) {
    console.log(e);
  }
}

export async function getSelectedCountries(): Promise<
  ItemIdListType | undefined
> {
  try {
    const res = await fetch(
      `/api/v1/selected_countries`,
      {
        next: { revalidate: false },
      }
    );
    if (!res.ok) {
      return;
    }
    const selectedCountries: ItemIdListType = await res.json();
    return selectedCountries;
  } catch (e) {
    console.log(e);
  }
}

export async function setSelectedCountries(
  action: ActionsType,
  id: ItemIdType
): Promise<ItemIdListType | undefined> {
  try {
    const res = await fetch(
      `/api/v1/selected_countries`,
      {
        method: "PUT",
        body: JSON.stringify({ action: action, id: id }),
        next: { revalidate: false },
      }
    );

    if (!res.ok) {
      return;
    }
    const countryList: ItemIdListType = await res.json();
    return countryList;
  } catch (e) {
    console.log(e);
  }
}

export async function getCurrencies(): Promise<ItemListType | undefined> {
  try {
    const res = await fetch(`/api/v1/currencies`, {
      next: { revalidate: false },
    });
    if (!res.ok) {
      return;
    }
    const currencies: ItemListType = await res.json();
    return currencies;
  } catch (e) {
    console.log(e);
  }
}

export async function getSelectedCurrencies(): Promise<
  ItemIdListType | undefined
> {
  try {
    const res = await fetch(
      `${process.env.API_URI}/api/v1/selected_currencies`,
      {
        next: { revalidate: false },
      }
    );

    if (!res.ok) {
      return;
    }

    const selectedCurrencies: ItemIdListType = await res.json();
    return selectedCurrencies;
  } catch (e) {
    console.log(e);
  }
}

export async function setSelectedCurrencies(
  action: ActionsType,
  id: ItemIdType
): Promise<ItemIdListType | undefined> {
  try {
    const res = await fetch(
      `/api/v1/selected_currencies`,
      {
        method: "PUT",
        body: JSON.stringify({ action: action, id: id }),
        next: { revalidate: false },
      }
    );

    if (!res.ok) {
      return;
    }
    const selectedCurrencies: ItemIdListType = await res.json();
    return selectedCurrencies;
  } catch (e) {
    console.log(e);
  }
}
