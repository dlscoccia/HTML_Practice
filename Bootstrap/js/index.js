$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });

    $('#contacto').on('show.bs.modal', function (e){
        console.log('Se va a mostrar');
        $('#contactoBtn').removeClass('btn-dark');
        $('#contactoBtn').addClass('btn-outline-dark');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function (e){
        console.log('Se mostro');
    });
    $('#contacto').on('hide.bs.modal', function (e){
        console.log('Se va a ocultar');
    });
    $('#contacto').on('hidden.bs.modal', function (e){
        console.log('Se oculto');
        $('#contactoBtn').prop('disabled', false);
    });

});