/**
 * api: http://cukcuk.manhnv.net/swagger/index.html
 */

class BaseJS {
  constructor() {
    this.getDataUrl = null;
    this.setDataUrl();
    this.loadData();
    this.initEvents();
  }

  /**
   * set lại dataUrl để sử dụng trong ajax
   */
  setDataUrl() {}

  /**
   * Khoi tao su kien cho tat ca button trong trang
   */
  initEvents() {
    let me = this;
    //su khien click khi nhan vao Them moi
    $("#btnAdd").click(function () {
      $("#dialogDetail").show().draggable();
    });

    //an form dialogDetail
    $(".btnDialog--close").click(function () {
      $("#dialogDetail").hide();
    });

    //load lai du lieu khi nhan Nap
    $("#btnRefresh").click(function () {
      me.loadData();
    });

    // Cat du lieu khi an luu
    $("#btnSave").click(function () {
      $("#dialogDetail").hide();
      //validate du lieu

      //thu thap thong tin du lieu duoc nhap => build thanh object
      var employee = {
        employeeCode: $("#txtEmployeeCode").val(),
        fullName: $("#txtFullName").val(),
        dateOfBirth: $("#dtDateOfBirth").val(),
        phoneNumber: $("#txtPhoneNumber").val(),
        email: $("#txtEmail").val(),
        address: $("#txtAddress").val(),
        salary: $("#txtSalary").val(),
      };
      console.log(employee);

      //goi service tuong ung thuc hien luu tru du lieu
      $.ajax({
        url: "http://cukcuk.manhnv.net/v1/Employees",
        method: "POST",
        async: true,
        data: JSON.stringify(employee),
        headers: {
          "Content-Type": "application/json",
          Authorization: true,
        },
        contentType: "application/json;charset=utf-8",
        dataType: "json",
      })
        .done(function (res) {
          console.log("done");
          console.log(res);
        })
        .fail(function (res) {
          console.log("fail");
          console.log(res);
        });

      //luu thanh cong dua ra thong bao cho nguoi dung, an form chi tiet load lai du lieu
    });

    //hien thi thong tin chi tiet khi nhan dup chuot vao mot ban ghi
    $("table tbody").on("dblclick", "tr", function () {
      $("#dialogDetail").show().draggable();
    });

    /**-----------------------------------------------
     * validate nhap thong tin
     * CreateBy
     */
    $("input[required]").blur(function () {
      //kiem tra du lieu nhap, neu trong thi canh bao
      var value = $(this).val();
      if (!value) {
        $(this).addClass("border--red");
        $(this).attr("title", "Trường này không được phép để trống!");
      } else {
        $(this).removeClass("border--red");
      }
    });

    /**-----------------------------------------------
     * validate email dung dinh dang
     * CreateBy
     */
    $('input[type="email"]').blur(function () {
      var filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      var value = $(this).val();
      if (!filter.test(value)) {
        $(this).addClass("border--red");
        $(this).attr("title", "Email khong dung dinh dang!");
      } else {
        $(this).removeClass("border--red");
      }
    });
  }

  /**--------------------------------------------------
   * Lấy dữ liệu
   */
  loadData() {
    try {
      $("table tbody").empty();
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
