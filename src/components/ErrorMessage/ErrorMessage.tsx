import { FC, ReactElement, MouseEventHandler } from "react";
import "./error-msg.scss";

const ErrorMessage: FC = (): ReactElement => {
  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    window.location.reload();
  };

  return (
    <div className="error-msg">
      <div className="error-msg__inner">
        <p className="error-msg__title">An error has occurred</p>
        <button type="button" className="btn" onClick={clickHandler}>
          Reload the page
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
