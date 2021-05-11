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
            item["DateOfBirth"] +
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
