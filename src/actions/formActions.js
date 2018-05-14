import dispatcher from "../dispatcher";

export function submitData(name, country, age) {
  dispatcher.dispatch({
    type: "SUBMIT",
    name,
    country,
    age,
  });
}
