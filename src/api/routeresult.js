import axios from "axios";

export async function RouteResult(departSearch, destinSearch) {
  console.log(departSearch, destinSearch);
  const response = await axios
    .get(
      `http://52.79.48.234:8080/subway/route?startStation=${departSearch}&endStation=${destinSearch}`
    )
    .then((res) => res.data);
  console.log(response);
  return response;
}
