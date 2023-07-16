import { useNavigate } from "react-router-dom";
import style from "./NotFound.module.css";

function NotFound() {
  const navigate = useNavigate();

  const mainButton = () => {
    navigate("/main", { replace: true });
  };
  return (
    <div className={style.login}>
      <h1 className={style.login__header}>404 PAGE</h1>
      <button
        onClick={mainButton}
        className={style.login__button}
        type="button"
      >
        На Main страницу
      </button>
    </div>
  );
}

export default NotFound;
