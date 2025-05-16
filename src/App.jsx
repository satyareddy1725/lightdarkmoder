import { useSelector, useDispatch } from "react-redux";
import "../src/App.css";

import { changeTheme } from "./features/lightdarkmode/lightDarkMode";
function App() {
  const btnName = useSelector((store) => store.lightDarkMode.btnName);
  const className = useSelector((store) => store.lightDarkMode.ClassName);
  const h1Style = useSelector((store) => store.lightDarkMode.headingClassName);

  const dispatch = useDispatch();
  return (
    <>
      <div className={className}>
        <h1 className={h1Style}>click to change Mode</h1>
        <button onClick={() => dispatch(changeTheme())}>{btnName}</button>
      </div>
    </>
  );
}

export default App;
