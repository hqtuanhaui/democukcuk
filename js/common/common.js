/**
 * Validate date sang dd/MM/yyy
 * @param {*} date
 * @returns
 * CreatedBy: HQTuan (05/12/2021)
 */
function validateDate(date) {
  var date = new Date(date);
  if (Number.isNaN(date.getTime())) {
    return "";
  } else {
    var day = date.getDate(),
      month = date.getMonth() + 1, //tháng tính từ 0
      year = date.getFullYear();
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;
    return day + "/" + month + "/" + year;
  }
}
