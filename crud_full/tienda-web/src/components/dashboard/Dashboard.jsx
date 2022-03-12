import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Dashboard = (props) => {
  useEffect(() => {
    const infoUser = { nombre: "" };

    if (infoUser === null) {
      props.history.push("/login");
    }
  });

  return (
    <div>
      <h3>Dashboard</h3>
    </div>
  );
};

export default withRouter(Dashboard);
