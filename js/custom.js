$(document).ready(function(){
    /*Initialize all select components*/
    $('.mdb-select').material_select();
    /*Initialize all datepicker components*/
    $('.datepicker').pickadate();
    /*Datatable*/
    $('.data-table').DataTable({
      responsive: true,
      dom: 'fBrltip',
		buttons: [{
                extend:    'excelHtml5',
                text:      '<i class="fa fa-file-excel-o"></i>',
                titleAttr: 'Exportar a excel',
                className:"btn light-blue darken-4 px-2 py-1 my-0"
            }],
      columnDefs: [
          {targets: '_all', className: "py-2" }
      ],
      lengthChange: true,
      language: {
          "sProcessing": "Procesando...",
          "sLengthMenu": "Mostrando _MENU_ registros por página",
          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
          "sSearch": "Filtrar:",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
              "sFirst": "<i class='fa fa-angle-double-left'>first_page</i>",
              "sLast": "<i class='fa fa-angle-double-right'>last_page</i>",
              "sNext": "<i class='fa fa-angle-right' aria-hidden='false'></i>",
              "sPrevious": "<i class='fa fa-angle-left' aria-hidden='false'></i>"
          },
      },
      lengthMenu: [[5,10,15], [5,10,15]],
      order: [[ 1, "asc" ]],
    pageLength: 10,
  });
  modalTable = $('.simple-data-table').DataTable({
      responsive: true,
      dom: 'tr',
      columnDefs: [
          {targets: '_all', className: "py-2" }
      ],
      "language": {
          "sProcessing": "Procesando...",
          "sLengthMenu": "Mostrando _MENU_ registros por página",
          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
          "sSearch": "Buscar:",
          "sLoadingRecords": "Cargando...",
          "oPaginate": {
              "sFirst": "<i class='fa fa-angle-double-left'>first_page</i>",
              "sLast": "<i class='fa fa-angle-double-right'>last_page</i>",
              "sNext": "<i class='fa fa-angle-right' aria-hidden='false'></i>",
              "sPrevious": "<i class='fa fa-angle-left' aria-hidden='false'></i>"
          },
      },
      "lengthMenu": [[5,10,15], [5,10,15]],
      "order": [[ 1, "asc" ]],
    "pageLength": 10,
      searching: false,
      paging: false
  });
  $("#modal-archives").on('shown.bs.modal', function(){
        $.fn.dataTable.tables( {visible: true, api: true} ).responsive.recalc();
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $.fn.dataTable.tables( {visible: true, api: true} ).responsive.recalc();
  })
  /*SideNav*/
  $(".button-collapse").sideNav();
  var sideNavScrollbar = document.querySelector('.custom-scrollbar');
  Ps.initialize(sideNavScrollbar);
  
  
  
});


