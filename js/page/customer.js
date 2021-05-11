$(document).ready(function () {
  loadData();
});

function loadData() {
  //lay du lieu ve - ajax
  $.ajax({
    url: "http://cukcuk.manhnv.net/v1/Employees",
    method: "GET",
  })
    .done(function (res) {
      let data = res;
      console.log(data);
      // vong lap qua res
      $.each(data, function (index, item) {
        let dateOfBirth = item["DateOfBirth"];
        dateOfBirth = validateDate(dateOfBirth);
        let tr = $(
          `<tr>
                
                <td>
                  <div>` +
            item["EmployeeCode"] +
            `</div>
                </td>
                
                <td>
                  <div>` +
            item["FullName"] +
            `</div>
                </td>
                
                <td>
                  <div>` +
            dateOfBirth +
            `</div>
                </td>
                
                <td>
                  <div>` +
            item["GenderName"] +
            `</div>
                </td>
                
                <td>
                  <div>` +
            item["PhoneNumber"] +
            `</div>
                </td>
                <td class="content__grid--address">
                  <div>` +
            item["Address"] +
            `</div>
                </td>
                
                <td>
                  <div>` +
            item["Email"] +
            `</div>
                </td>
                
                <td>
                  <div>` +
            item["Salary"] +
            `</div>
                </td>
                
                <td>
                  <div>` +
            item["DepartmentName"] +
            `</div>
                </td>
                
              </tr>`
        );

        $("table tbody").append(tr);
      });
    })
    .fail(function (res) {});
}

// validate ngay sinh
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
