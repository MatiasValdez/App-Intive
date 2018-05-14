import dispatcher from "../dispatcher";

export function submitData(name, country, age) {
  dispatcher.dispatch({
    type: "SUBMIT",
    name,
    country,
    age,
  });
}
export function deleteData(name, country, age) {
  dispatcher.dispatch({
    type: "DELETE",
    name,
    country,
    age,
  });
}
