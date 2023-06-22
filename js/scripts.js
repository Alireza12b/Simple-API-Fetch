$(document).ready(function () {
    function fetchData() {
        var productId = $('#product-id').val();
        $('#table tbody').empty();
        $.getJSON(`https://dummyjson.com/products/${productId}`, function (product) {
            var row = $('<tr>').appendTo('#table tbody');
            $('<td>').text(product.id).appendTo(row);
            $('<td>').text(product.title).appendTo(row);
            $('<td>').text(product.price).appendTo(row);
        }).fail(function () {
            var message = 'Entered ID not found';
            var row = $('<tr>').appendTo('#table tbody');
            $('<td>').attr('colspan', '3').text(message).appendTo(row);
        });
    }
    $('button').click(function () {
        fetchData();
    });
});