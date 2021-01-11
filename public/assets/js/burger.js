$(function () {
  $(".change-devour").on("click", function (event) {
    const id = $(this).data("id");

    const newState = {
      devoured: true,
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newState,
    }).then(function () {
      // Reload the page for updated list
      location.reload();
    });
  });
  $(".create-form").on("submit", function (event) {
    // console.log("submit");
    event.preventDefault();
    let newBurger = {
      burger_name: $("#newBurger").val().trim(),
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });
});
