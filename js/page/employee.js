$(document).ready(function () {
  new EmployeeJS();
});

/**====================================================================
 * Class quản lý các sự kiện xảy ra ở trang Employee
 */
class EmployeeJS extends BaseJS {
  constructor() {
    super();
  }

  /**
   * ghi đè lại getDataUrl
   */
  setDataUrl() {
    this.getDataUrl = "http://cukcuk.manhnv.net/v1/Employees";
  }

  /**==================================
   * Thêm mới dữ liệu
   * CreatedBy: HQTuan (05/12/2021)
   */
  add() {}

  /**==================================
   * Chỉnh sửa dữ liệu
   * CreatedBy: HQTuan (05/12/2021)
   */
  edit() {}

  /**==================================
   * Xóa dữ liệu
   * CreatedBy: HQTuan (05/12/2021)
   */
  delete() {}
}

/**==================================
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
