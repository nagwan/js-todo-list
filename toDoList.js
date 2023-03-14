$(document).ready(function () {

  $(".add-items").submit(function (event) {
    event.preventDefault();

    var item = $("#todo-list-item").val();

    if (item) {

      var li = $("<li><input class='checkbox' type='checkbox'/>" + item +
        "<a class='remove'>x</a><hr/></li>");
      $("#list-items").append(li);
      $("#todo-list-item").val("");

    }

    li.on("change", ".checkbox", function () {

      $(this).parent().toggleClass("completed");

    });

    li.on("click", ".remove", function () {
      $(this).parent().remove();
    })
  });

});
