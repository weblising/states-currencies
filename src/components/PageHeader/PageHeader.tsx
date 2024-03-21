import { FC, ReactElement, MouseEventHandler } from "react";
import { viewTypeState, preloaderState } from "@/store/store";
import { useRecoilState } from "recoil";
import "./page-header.scss";

const PageHeader: FC = (): ReactElement => {
  const [listType, setListType] = useRecoilState(viewTypeState);
  const [isLoading, setLoading] = useRecoilState(preloaderState);

  const clickHandler: MouseEventHandler = () => {
    setListType(listType === "countries" ? "currencies" : "countries");
    setLoading(true);
  };
  return (
    <div className="section">
      <h1 className={`page-header${isLoading ? " page-header_disabled" : ""}`}>
        <>Select your favorite </>
        <span className="page-header__span" onClick={clickHandler}>
          {listType === "countries" ? "country" : "currency"}
        </span>
      </h1>
    </div>
  );
};

export default PageHeader;
