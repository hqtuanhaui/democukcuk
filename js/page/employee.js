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
