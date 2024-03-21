import { FC, ReactElement } from "react";
import { useRecoilState } from "recoil";
import {
  preloaderState,
  errorState,
  itemsState,
  viewTypeState,
} from "@/store/store";
import { ListChildComponentProps, FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Preloader from "@/components/Preloader/Preloader";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage";
import MainListItem from "@/components/MainLIst/MainListItem";
import "./main-list.scss";

const MainList: FC = (): ReactElement => {
  const [isLoading] = useRecoilState(preloaderState);
  const [isError] = useRecoilState(errorState);
  const [items] = useRecoilState(itemsState);
  const [listType] = useRecoilState(viewTypeState);

  const Row: FC<ListChildComponentProps> = ({ index, style }): ReactElement => (
    <div
      className={`main-list__item${
        index === items.length - 1 ? " main-list__item_last" : ""
      }`}
      style={style}
    >
      <MainListItem item={items[index]} />
    </div>
  );

  return (
    <div className="main-list">
      <div className="main-list__wrap  mx-auto">
        {isError ? (
          <ErrorMessage />
        ) : (
          <>
            {isLoading ? (
              <Preloader />
            ) : (
              <AutoSizer>
                {({ height, width }) => (
                  <FixedSizeList
                    className="main-list__inner"
                    height={height}
                    itemCount={items.length}
                    itemSize={listType === "countries" ? 80 : 110}
                    width={width}
                  >
                    {Row}
                  </FixedSizeList>
                )}
              </AutoSizer>
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default MainList;
