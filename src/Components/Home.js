import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.push("/pizza")}>
        Order Pizza Here!!!!
      </button>
    </div>
  );
};

export default Home;
