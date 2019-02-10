$(function() {
    $("change-devoured").on("click", (event) => {
      const id = $(this).data("id");
      const status = $(this).data("status");
  
      let newStatus = {
        devoured: status
      };
  
      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: newStatus
      }).then(
        () => {
          console.log(`changed state to ${status}`);
          location.reload();
        }
      );
    });
  

$(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurger = {
      burger_name: $("#bg").val().trim(),
      devoured: false
    };


$.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    () => {
      console.log("created new burger");
      location.reload();
    }
  );
});

$(".delete-burger").on("click", (event) => {
  const id = $(this).data("id");

  $.ajax(`/api/burgers/${id}`, {
    type: "DELETE"
  }).then(
    () => {
      console.log(`deleted burger${id}`);
      location.reload();
    }
  );
});
});