import React, { Component, useState } from "react";

function Town(props) {
  return <div id={"town" + (props.townId + 1)}>{props.townName.name}</div>;
}

export default Town;
