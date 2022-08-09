import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, setAuthToken } from "../../../redux/reducer/index";
import style from "./logout.module.css";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setAuthToken(""));
    dispatch(logout());
    navigate("/");
  };

  return (
    <button onClick={handleClick} className={style.button}>
      {" "}
      Desconectarse{" "}
    </button>
  );
};

export default Logout;
