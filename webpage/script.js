$(document).ready(function() {
    let count = 0;
    $('#count').text(count);

    // Example: Increment counter on button click
    $('button').click(function() {
        count++;
        $('#count').text(count);
    });
});
   