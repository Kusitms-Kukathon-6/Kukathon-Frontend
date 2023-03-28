import axios from "axios";
export async function StationInfo(name) {
  console.log(name);
  const response = await axios
    .get(`http://52.79.48.234:8080/subway/route/${name}`)
    .then((res) => res.data);

  return response;
}

export default StationInfo;
