function loadData() {
  //lay du lieu ve - ajax
  $.ajax({
    url: "http://cukcuk.manhnv.net/v1/Employees",
    method: "GET",
  })
    .done(function (response) {
      var data = response;
      console.log(data);
      //vong lap
      debugger;
      $.each(data, function (index, item) {
        var tr = $(`<tr>
          <td><div>MF844</div></td>
          <td><div>Hà Quốc tuấn</div></td>
          <td><div>Nam</div> </td>
          <td><div>Ngày sinh</div></td>
          <td><div> 012334567</div></td>
          <td><div>Hải Dương</div></td>
        </tr>`);

        //append vao element duoc tro den
        $("table tbody").append(tr);
      });
    })
    .fail(function (response) {});
}
