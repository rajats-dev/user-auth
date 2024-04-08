const calculateDate = (seconds) => {
  let date = new Date(seconds * 1000);
  let year = date.getFullYear();
  var month = date.toLocaleString("default", { month: "long" });
  let day = ("0" + date.getDate()).slice(-2);
  let formatDate = day + "-" + month + "-" + year;
  return formatDate;
};

export default calculateDate;
