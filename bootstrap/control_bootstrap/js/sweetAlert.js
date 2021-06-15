const btn = document.querySelectorAll(".sweet");
console.log(btn[0]);
/*
for (i = 0; i < btn.length; i++) {
  console.log(btn[i]);
  btn[i].addEventListener("click", () => {
    console.log("clicked");
    swal({
      title: "Here's a title!",
    });
  });
}
*/

/* sample Alert */
btn[0].addEventListener("click", () => {
  console.log("click");
  swal({
    title: "Here's a title!",
  });
});

/* 심부름 매칭됐을때 띄워주는 알림창*/
btn[1].addEventListener("click", () => {
  console.log("click");
  swal("Good job!", "You clicked the button!", "success");
});

btn[2].addEventListener("click", () => {
  console.log("click");
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning", //warning, error, success, info
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
});

btn[3].addEventListener("click", () => {
  console.log("click");
  swal("Good job!", "You clicked the button!", "success");
});
