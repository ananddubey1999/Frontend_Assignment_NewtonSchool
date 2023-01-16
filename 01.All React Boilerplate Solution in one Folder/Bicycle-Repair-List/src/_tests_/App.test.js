import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  getByText,
  waitFor,
  act,
} from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import App from "../components/App";
import { combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

afterEach(() => {
  cleanup();
});

const initalState = {
  items: [
    {
      id: 1,
      owner: "Chirag",
      model: "Hero",
      description: "Break fail",
      resolved: false,
    },
    {
      id: 2,
      owner: "Rohit",
      model: "Tata",
      description: "Everything",
      resolved: false,
    },
    {
      id: 3,
      owner: "Harsh",
      model: "Hero",
      description: "Padel fail",
      resolved: false,
    },
  ],
  item: { owner: "", model: "", description: "", resolved: false },
  editMode: false,
};
function reducer(state = initalState, action) {
  switch (action.type) {
    case "repairAdded":
      action.payload.id = uuidv4();
      action.payload.resolved = false;
      return {
        ...state,
        items: state.items.concat([action.payload]),
        item: { owner: "", model: "", description: "" },
        editMode: false,
      };

    case "repairRemoved":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        item: { owner: "", model: "", description: "" },
        editMode: false,
      };
    case "repairResolved":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id == action.payload.id) {
            item.resolved = !item.resolved;
          }
          return item;
        }),
        item: { owner: "", model: "", description: "" },
      };
    case "editTask":
      return {
        ...state,
        item: action.payload,
        editMode: true,
      };
    case "repairUpdate":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id == action.payload.id) {
            item.owner = action.payload.owner;
            item.model = action.payload.model;
            item.description = action.payload.description;
          }
          return item;
        }),
        item: { owner: "", model: "", description: "" },
        editMode: false,
      };
    default:
      return state;
  }
}

function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(combineReducers({ bicycle: reducer }), initialState),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe("Rendering Test. ", () => {
  it("Heading and labels Exist", () => {
    const { getByText } = renderWithRedux(<App />);
    const labels = document.getElementsByTagName("label");
    expect(String(labels[0].innerHTML)).toMatch("Owner");
    expect(String(labels[1].innerHTML)).toMatch("Model");
    expect(String(labels[2].innerHTML)).toMatch("Description");
  });
});

describe("Adding repair", () => {
  it("Adding a repair ", () => {
    const { getByText } = renderWithRedux(<App />);

    const ownerTextBox = document.getElementById("owner-text-box");
    fireEvent.change(ownerTextBox, { target: { value: "Chirag" } });

    const modelTextBox = document.getElementById("model-text-box");
    fireEvent.change(modelTextBox, { target: { value: "Hero" } });

    const descTextBox = document.getElementById("description-text-box");
    fireEvent.change(descTextBox, { target: { value: "Loose Breaks" } });

    fireEvent.click(getByText("+"));
    const repairItems = document.getElementsByClassName("repair-item");

    expect(repairItems.length).toEqual(4);
    expect(repairItems[3].innerHTML).toMatch("Hero");
    expect(repairItems[3].innerHTML).toMatch("Chirag");
    expect(repairItems[3].innerHTML).toMatch("Loose Breaks");
    expect(repairItems[3].innerHTML).toMatch("Done");
    expect(repairItems[3].innerHTML).toMatch("Update");
    expect(repairItems[3].innerHTML).toMatch("Delete");
    expect(document.getElementById("owner-text-box").value).toEqual("");
    expect(document.getElementById("model-text-box").value).toEqual("");
    expect(document.getElementById("description-text-box").value).toEqual("");
  });
});

describe("Testing Update, Delete, Done/Undo button functionality", () => {
  it("Updating a repair ", () => {
    const { getByText } = renderWithRedux(<App />);

    fireEvent.click(document.getElementsByTagName("button")[1]);

    expect(document.getElementById("owner-text-box").value).toEqual("Chirag");
    expect(document.getElementById("model-text-box").value).toEqual("Hero");
    expect(document.getElementById("description-text-box").value).toEqual(
      "Break fail"
    );

    const ownerTextBox = document.getElementById("owner-text-box");
    fireEvent.change(ownerTextBox, { target: { value: "Chirag Mulchandani" } });

    const modelTextBox = document.getElementById("model-text-box");
    fireEvent.change(modelTextBox, { target: { value: "Hero 1255" } });

    const descTextBox = document.getElementById("description-text-box");
    fireEvent.change(descTextBox, { target: { value: "Flat Tyre" } });

    const repairItems = document.getElementsByClassName("repair-item");

    fireEvent.click(document.getElementsByTagName("button")[0]);

    expect(repairItems.length).toEqual(3);
    expect(repairItems[0].innerHTML).toMatch("Hero 1255");
    expect(repairItems[0].innerHTML).toMatch("Chirag Mulchandani");
    expect(repairItems[0].innerHTML).toMatch("Flat Tyre");
    expect(repairItems[0].innerHTML).toMatch("Done");
    expect(repairItems[0].innerHTML).toMatch("Update");
    expect(repairItems[0].innerHTML).toMatch("Delete");
    expect(document.getElementById("owner-text-box").value).toEqual("");
    expect(document.getElementById("model-text-box").value).toEqual("");
    expect(document.getElementById("description-text-box").value).toEqual("");
  });
  it("Resolving a repair ", () => {
    const { getByText } = renderWithRedux(<App />);

    fireEvent.click(document.getElementsByTagName("button")[3]);
    const repairItems = document.getElementsByClassName("repair-item");

    expect(repairItems.length).toEqual(3);
    expect(repairItems[0].innerHTML).toMatch("Chirag");
    expect(repairItems[0].innerHTML).toMatch("Undo");
    expect(repairItems[0].innerHTML).toMatch("Update");
    expect(repairItems[0].innerHTML).toMatch("Delete");
  });
  it("Deleting a repair ", () => {
    const { getByText } = renderWithRedux(<App />);

    fireEvent.click(document.getElementsByTagName("button")[2]);
    const repairItems = document.getElementsByClassName("repair-item");

    expect(repairItems.length).toEqual(2);
  });

  it("Undoing the resolved action a repair ", () => {
    const { getByText } = renderWithRedux(<App />);

    act(() => {
      fireEvent.click(document.getElementsByTagName("button")[3]);
      fireEvent.click(document.getElementsByTagName("button")[3]);
    });

    const repairItems = document.getElementsByClassName("repair-item");

    waitFor(() => {
      expect(repairItems.length).toEqual(3);
      expect(repairItems[0].innerHTML).toMatch("Chirag");
      expect(repairItems[0].innerHTML).toMatch("Done");
      expect(repairItems[0].innerHTML).toMatch("Update");
      expect(repairItems[0].innerHTML).toMatch("Delete");
    });
  });
  it("Update button click -> Fill input Boxes -> Done button Click -> should clear input boxes", () => {
    const { getByText } = renderWithRedux(<App />);
    act(() => {
      fireEvent.click(document.getElementsByTagName("button")[1]);
      fireEvent.click(document.getElementsByTagName("button")[3]);
    });
    waitFor(() => {
      expect(document.getElementById("owner-text-box").value).toEqual("");
      expect(document.getElementById("model-text-box").value).toEqual("");
      expect(document.getElementById("description-text-box").value).toEqual("");
    });
  });
});