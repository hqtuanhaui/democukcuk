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
    try {
      //danh sach cot
      var columns = $("table thead th");
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
              //lấy giá trị của attribute fieldName
              var fieldName = $(th).attr("fieldName");
              var formatType = $(th).attr("formatType");
              //lấy giá trị của trường tương ứng với fieldName
              var value = data[fieldName];
              switch (formatType) {
                case "ddmmyyyy":
                  value = validateDate(value);
                  break;
                case "Money":
                  td.addClass("text-align-right");
                  value = formatMoney(value);
                  break;
                default:
                  break;
              }
              $(td).append(value);

              tr = $(tr).append(td);
            });

            $("table tbody").append(tr);
          });
        })
        .fail(function (res) {});
    } catch (error) {
      console.log(error);
    }
  }
}
