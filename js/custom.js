$(document).ready(function(){
	$("footer").load("footer.html");
    /*Initialize all select components*/
    $('.mdb-select').material_select();
    /*Initialize all datepicker components*/   

    var myDate = new Date();
    var res = myDate.getFullYear() + "," + myDate.getMonth() + "," + myDate.getDate();
    $('.datepicker').pickadate({
        format : 'yyyy/mm/dd',
        formatSubmit : 'yyyy/mm/dd',
        monthsFull: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
        monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
        weekdaysFull: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
        weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
        today: 'hoy',
        clear: 'borrar',
        close: 'cerrar',
        firstDay: 1,    
        min : res
    });


    
    /*Datatable*/
    $('.data-table').DataTable({
      responsive: true,
      dom: 'fBrltip',
		buttons: [{
                extend:    'excelHtml5',
                text:      '<a class="btn-floating btn-sm teal waves-effect waves-light py-2 my-0">XLS</a>',
                titleAttr: 'Exportar XLS',
                className:"btn-unstyled"
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
      order: [[ 0, "asc" ]],
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
  //Ps.initialize(sideNavScrollbar);
	/* Wow Animation */
	new WOW().init();
	/* Login Form */
	$("#user-login").click(function (e) {
		$("#form-login").slideToggle("slow");
		e.stopPropagation();
		$("#form-login-pass").hide();
	});	
	$("#form-login").click(function(e){
		e.stopPropagation();
	});	
    /* Recovery Pass Form */	
	$("#user-login-pass").click(function (e) {
		$("#form-login-pass").slideToggle("slow");
		e.stopPropagation();
		$("#form-login").hide();
	});
	$("#form-login-pass").click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(){
		$("#form-login").hide();
		$("#form-login-pass").hide();
	});
    
    /* convertir en slider */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots:false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
                margin: 20,
            }
        }
    });
    
    
  /* para igualar las alturas de las cajas de texto de las cards */
  var altura_arr = [];
  $('.row .contenedores').each(function(){
    var altura = $(this).height();
    altura_arr.push(altura);
  });
  altura_arr.sort(function(a, b){return b-a});
  $('.row .contenedores').each(function(){
    $(this).css('height',altura_arr[0]);
  });
       
    
   /* tamaño monitor menu desplegable */
var ventana_ancho = $(window).width();    
    
if (ventana_ancho >= 1100) {
    $('#slide-out').css({"-webkit-transform":"translate(-100%)"});
    /*$('#slide-out').hide();*/
}
    
    
    
  
});





$(document).ready(function() {
    $('#selector_moneda').change(function() {
        $('.campos_moneda').hide();
        $('.' + $(this).val()).show();    
    });
});