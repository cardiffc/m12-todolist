$(function(){

    const appendTask = function (data) {
        var taskCode = '<h3>Номер: ' + data.id + '</h3>' + '<h4>' + data.name + '</h4>'
            + 'Описание: ' + data.description;
        $('#task-list').append('<div>' + taskCode + '</div>');
    };

//    Loading tasks on load page
   $.get('/tasks/', function(response)
   {
       for(i in response) {
           appendTask(response[i]);
       }
   });

    //Show adding book form
    $('#show-add-task-form').click(function(){
        $('#add-task-form').css('display', 'flex');
    });

    //Closing adding book form
    $('#add-task-form').click(function(event){
        if(event.target === this) {
            $(this).css('display', 'none');
        }
    });

    // Show all do form
    $('#do-list').click(function (){
        $('#all-do-form').css('display','flex');
    });

    // Close all do list
    $('#all-do-form').click(function(event){
        if(event.target === this) {
            $(this).css('display', 'none');
        }
    });


    //Getting book
    $(document).on('click', '.book-link', function(){
        var link = $(this);
        var bookId = link.data('id');
        $.ajax({
            method: "GET",
            url: '/books/' + bookId,
            success: function(response)
            {
                var code = '<span>Год выпуска:' + response.year + '</span>';
                link.parent().append(code);
            },
            error: function(response)
            {
                if(response.status == 404) {
                    alert('Книга не найдена!');
                }
            }
        });
        return false;
    });

    //Adding task
    $('#save-task').click(function()
    {
        var data = $('#add-task-form form').serialize();
        $.ajax({
            method: "POST",
            url: '/tasks/',
            data: data,
            success: function(response)
            {
                $('#add-task-form').css('display', 'none');
                var task = {};
                task.id = response;
                var dataArray = $('#add-task-form form').serializeArray();
                for(i in dataArray) {
                    task[dataArray[i]['name']] = dataArray[i]['value'];
                }
                appendTask(task);
            }
        });
        return false;
    });

});