const api = "http://localhost:3000//api/v1/notes";

const fetchData = () => fetch(api).then(resp => resp.json());

const patchData = noteObj => {
  const data = {
    title: noteObj.title,
    body: noteObj.body
  };
  const configObj = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
  return fetch(api + "/" + noteObj.id, configObj).then(resp => resp.json());
};

const postData = () => {
  const data = {
    title: "",
    body: ""
  };
  const configObj = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
  return fetch(api, configObj).then(resp => resp.json());
};

const deleteData = id => {
  const configObj = { method: "DELETE" };
  return fetch(api + "/" + id, configObj)
};

export default {
  fetchData,
  patchData,
  postData,
  deleteData
};
