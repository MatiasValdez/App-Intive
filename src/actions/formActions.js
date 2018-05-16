import dispatcher from "../dispatcher";

export function submitData (name, country, age) {
  dispatcher.dispatch({
    type: "SUBMIT",
    name,
    country,
    age,
  });
}
export function backOldLeyend (idLeyenda) {
  dispatcher.dispatch({
    type: "LOGLEYENDAS",
    idLeyenda,
  });
}
