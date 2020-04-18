import React, { Fragment } from "react";
import Form from "./CreateTrack";
import Tracks from "./Profile";

export default function ProfileDashboard() {
  return (
    <div>
      <Fragment>
        <Form />
        <Tracks />
      </Fragment>
    </div>
  );
}
