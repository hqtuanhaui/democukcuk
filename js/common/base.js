class BaseJS {
  constructor() {
    this.getDataUrl = null;
    this.setDataUrl();
    this.loadData();
  }

  /**
   * set lại dataUrl để sử dụng trong ajax
   */
  setDataUrl() {}

  /**
   * Lấy dữ liệu
   */
  loadData() {
    //danh sach cot
    var columns = $("table thead th");
    var fieldNames = [];
    var getDataUrl = this.getDataUrl;
    //
    $.ajax({
      url: getDataUrl,
      method: "GET",
    })
      .done(function (res) {
        //res : danh sach nhan vien
        $.each(res, function (index, data) {
          // moi lan duyet, build thanh mot the tr
          var tr = $(`<tr></tr>`);

          //lay thong tin cac cot
          $.each(columns, function (index, th) {
            var td = $(`<td> <div></div> </td>`);
            var fieldName = $(th).attr("fieldName");
            var value = data[fieldName];
            $(td).append(value);

            tr = $(tr).append(td);
          });

          $("table tbody").append(tr);
        });
      })
      .fail(function (res) {});
  }
}
