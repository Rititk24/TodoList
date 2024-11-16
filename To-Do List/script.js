$(document).ready(function(){
    if(localStorage.getItem('savedData'))
    {
        $('#toDoContainer').html(localStorage.getItem('savedData'));
    }
    $('#addToDo').click(function(){
        addToDoItem();
    });

    $('#inputField').keypress(function (e) {
        if (e.which === 13) { // Enter key
            addToDoItem();
        }});

    function addToDoItem()
    {
        const Todo=$('#inputField').val().trim();
        if(Todo)
        {
            const items=
            `<div class="alert alert-secondary d-flex justify-content-between align-items-center mb-2">
                <span>${Todo}</span>
                <button class="btn btn-danger btn-sm delete-btn">
                    <i class="fa fa-trash"></i>
                </button>
            </div>`;

            $('#toDoContainer').append(items);

            $('#inputField').val('');

            localStorage.setItem('savedData', $('#toDoContainer').html());

        }
    }

    $('#toDoContainer').on('click','.delete-btn',function(){
        $(this).closest('.alert').remove();

        localStorage.setItem('savedData', $('#toDoContainer').html());
    });

});