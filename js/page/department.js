$(document).ready(function () {
  new DepartmentJS();
});

class DepartmentJS extends BaseJS {
  constructor() {
    super();
  }

  setDataUrl() {
    this.getDataUrl = "http://cukcuk.manhnv.net/api/Department";
  }
}
