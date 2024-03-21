import { FC, ReactElement } from "react";
import "./preloader.scss";

const Preloader: FC = (): ReactElement => {
  return (
    <div className="preloader">
      <div className="preloader__inner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
