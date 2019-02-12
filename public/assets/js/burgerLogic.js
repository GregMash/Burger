$(function () {
  $(".change-devoured").on("click", function (event) {
    let id = $(this).data("id");
    let newDevour = $(this).data("newstatus");
    
    let newDevouredState = {
      devoured: newDevour
    };

    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newDevouredState
    }).then(() => {
      console.log(`changed state to ${newDevour}`);
      location.reload();
    }
    );
  });


  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    
    let newBurger = {
      burger_name: $("#bg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    console.log(newBurger);


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
      console.log("created new burger");
      location.reload();
    }
    );
  });

  $(".delete-burger").on("click", function(event) {
    let id = $(this).data("id");
    console.log('idddddd' + id);
    $.ajax(`/api/burgers/${id}`, {
      type: "DELETE"
    }).then(() => {
      console.log(`deleted burger: ${id}`);
      location.reload();
    }
    );
  });
});