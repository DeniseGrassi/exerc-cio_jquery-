$(document).ready(function() {

    $('form').on('submit',function(e) {  
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val(); 

        const novoItem = $ ('<li> </li>').text(novaTarefa) ;

        novoItem.appendTo('ul');     
        $('#nova-tarefa').val('');  

        novoItem.on('click', function() {
            $(this).toggleClass('tarefa');

        });
    }) ;

});