$(document).ready(function(){
    /*Initialize all select components*/
    $('.mdb-select').material_select();
    /*Initialize all datepicker components*/
    $('.datepicker').pickadate();
    /*Datatable*/
    $('.data-table').DataTable({
	    responsive: true,
	    dom: 'Bfrtip',
	    columnDefs: [
	        {targets: '_all', className: "py-2" }
	    ],
	    "language": {
	        "Processing": "Procesando...",
	        "lengthMenu": "Mostrando _MENU_ registros por página",
	        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
	        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
	        "search": "Buscar:",
	        "loadingRecords": "Cargando...",
	        "oPaginate": {
	            "sFirst": "<i class='fa fa-angle-double-left'>first_page</i>",
	            "sLast": "<i class='fa fa-angle-double-right'>last_page</i>",
	            "sNext": "<i class='fa fa-angle-right' aria-hidden='false'></i>",
	            "sPrevious": "<i class='fa fa-angle-left' aria-hidden='false'></i>"
	        },
	    },
	    "lengthMenu": [[5,10,15,20,25,30,35,40,45,50], [5,10,15,20,25,30,35,40,45,50]],
	    "order": [[ 1, "asc" ]],
		"pageLength": 5,
	    searching: true,
	    paging: true
	});
	modalTable = $('.simple-data-table').DataTable({
	    responsive: true,
	    dom: 'Btr',
	    columnDefs: [
	        {targets: '_all', className: "py-2" }
	    ],
	    "language": {
	        "Processing": "Procesando...",
	        "lengthMenu": "Mostrando _MENU_ registros por página",
	        "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
	        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
	        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
	        "search": "Buscar:",
	        "loadingRecords": "Cargando...",
	        "oPaginate": {
	            "sFirst": "<i class='fa fa-angle-double-left'>first_page</i>",
	            "sLast": "<i class='fa fa-angle-double-right'>last_page</i>",
	            "sNext": "<i class='fa fa-angle-right' aria-hidden='false'></i>",
	            "sPrevious": "<i class='fa fa-angle-left' aria-hidden='false'></i>"
	        },
	    },
	    "lengthMenu": [[5,10,15,20,25,30,35,40,45,50], [5,10,15,20,25,30,35,40,45,50]],
	    "order": [[ 1, "asc" ]],
		"pageLength": 5,
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


