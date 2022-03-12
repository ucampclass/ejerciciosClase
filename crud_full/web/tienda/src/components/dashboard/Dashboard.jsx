import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { getToken } from "../../helpers/user";

const Dashboard = (props) => {
  useEffect(() => {
    const value = getToken();

    if (!value) {
      props.history.push("/login");
    }
  }, []);
  return (
    <div>
      <h1>Dashboard protegido</h1>
    </div>
  );
};

export default withRouter(Dashboard);
