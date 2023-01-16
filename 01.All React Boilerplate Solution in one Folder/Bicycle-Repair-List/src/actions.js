/*
Here all the actions are defined.
Example of defining an actoin is as follows
export const repairAdded = (var1,va2) => {
  return {
    type: "actionType1",
    payload: {
      var1,
      var2
    }
  }
}
*/
export const repairAdded = ({ owner, model, description }) => {
  return {
    type: "repairAdded",
    payload: {
      owner,
      model,
      description,
    },
  };
};

export const repairRemoved = (id) => {
  return {
    type: "repairRemoved",
    payload: {
      id,
    },
  };
};
export const repairResolved = (id) => {
  return {
    type: "repairResolved",
    payload: {
      id,
    },
  };
};
export const repairUpdate = ({ id, owner, model, description }) => {
  return {
    type: "repairUpdate",
    payload: {
      id,
      owner,
      model,
      description,
    },
  };
};
export const editTask = ({ id, owner, model, description }) => {
  return {
    type: "editTask",
    payload: {
      id,
      owner,
      model,
      description,
    },
  };
};