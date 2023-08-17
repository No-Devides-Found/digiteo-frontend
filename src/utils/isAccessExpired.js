import moment from "moment";

//접근 만료가 됐는지 아닌지 boolean값이 저장됨
const isAccessExpired = () => {
  const accessExpiration = localStorage.getItem("access_expiration");

  if (!accessExpiration) {
    //접근 기한이 없을때
    return true;
  }

  const currentDateTime = moment();
  const expirationDateTime = moment(accessExpiration, "YYYY-MM-DD HH:mm:ss");

  return currentDateTime.isAfter(expirationDateTime);
  //현재 시각이 기한 이후면 true 아니면 false
};

export default isAccessExpired;
