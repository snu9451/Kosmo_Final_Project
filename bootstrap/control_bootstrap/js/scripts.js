/*!
    * Start Bootstrap - SB Admin v7.0.1 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 


$(document).ready(function () {
  var $setRows = $('#setRows');

  $setRows.submit(function (e) {
    e.preventDefault();
    var rowPerPage = $('#rowPerPage').val() * 1;
    // 1 을  곱하여 문자열을 숫자형로 변환


    $('#nav').remove();
    var $products = $('#products');

    $products.after('<div id="nav">');


    var $tr = $($products).find('tbody tr');
    var rowTotals = $tr.length;

    var pageTotal = Math.ceil(rowTotals / rowPerPage);
    var i = 0;

    for (; i < pageTotal; i++) {
      $('<a href="#"></a>')
        .attr('rel', i)
        .html(i + 1)
        .appendTo('#nav');
    }
    $tr.addClass('off-screen')
      .slice(0, rowPerPage)
      .removeClass('off-screen');

    var $pagingLink = $('#nav a');
    $pagingLink.on('click', function (evt) {
      evt.preventDefault();
      var $this = $(this);
      if ($this.hasClass('active')) {
        return;
      }
      $pagingLink.removeClass('active');
      $this.addClass('active');
      // 0 => 0(0*4), 4(0*4+4)
      // 1 => 4(1*4), 8(1*4+4)
      // 2 => 8(2*4), 12(2*4+4)
      // 시작 행 = 페이지 번호 * 페이지당 행수
      // 끝 행 = 시작 행 + 페이지당 행수

      var currPage = $this.attr('rel');
      var startItem = currPage * rowPerPage;
      var endItem = startItem + rowPerPage;
      $tr.css('opacity', '0.0')
        .addClass('off-screen')
        .slice(startItem, endItem)
        .removeClass('off-screen')
        .animate({ opacity: 1 }, 300);
      console.log("5");
    });

    $pagingLink.filter(':first').addClass('active');

  });

  $setRows.submit();
});


window.addEventListener('DOMContentLoaded', event => {

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    //     document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  }

});
