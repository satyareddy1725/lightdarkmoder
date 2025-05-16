import { useDispatch, useSelector } from "react-redux";
import "../src/App.css";
import {
  showOrHideFirstName,
  showOrHideLastName,
} from "./features/showorhide/showOrHideSlice";

function App() {
  const state = useSelector((store) => store.showOrHide);
  const { showFirstName, showLastName } = state;
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1>Show/hide</h1>
        <button onClick={() => dispatch(showOrHideFirstName())}>
          show/Hide FirstName
        </button>
        {showFirstName ? (
          <div>
            <h1>jeo</h1>
          </div>
        ) : null}
        <button onClick={() => dispatch(showOrHideLastName())}>
          show/Hide LastName
        </button>
        {showLastName ? (
          <div>
            <h1>reddy</h1>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
