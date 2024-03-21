import { FC, ReactElement } from "react";
import { ItemType } from "@/types/types";
import MainListItemControl from "@/components/MainLIst/MainListItemControl";
import "@/scss/item.scss";

type Props = {
  item: ItemType;
};

const MainListItem: FC<Props> = ({ item }): ReactElement => {
  const { id, bindList } = item;
  const description = bindList.join(",");

  return (
    <div className="item">
      <div className="item__inner">
        <div className="item__header">
          {<MainListItemControl item={item} />}
          <div className="item__heading">
            <p className="item__title">{id}</p>
          </div>
        </div>
        <div className="item__desc">{description}</div>
      </div>
    </div>
  );
};
export default MainListItem;
