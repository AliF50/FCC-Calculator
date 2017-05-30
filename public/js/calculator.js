$(document).ready(function() {
    $("#1").click(function() {
        $("#result").val($("#result").val() + 1);
    });
    $("#2").click(function() {
        $("#result").val($("#result").val() + 2);
    });
    $("#3").click(function() {
        $("#result").val($("#result").val() + 3);
    });
    $("#4").click(function() {
        $("#result").val($("#result").val() + 4);
    });
    $("#5").click(function() {
        $("#result").val($("#result").val() + 5);
    });
    $("#6").click(function() {
        $("#result").val($("#result").val() + 6);
    });
    $("#7").click(function() {
        $("#result").val($("#result").val() + 7);
    });
    $("#8").click(function() {
        $("#result").val($("#result").val() + 8);
    });
    $("#9").click(function() {
        $("#result").val($("#result").val() + 9);
    });
    $("#dec").click(function() {
        $("#result").val($("#result").val() + '.');
    });
    $("#plus").click(function() {
        $("#result").val($("#result").val() + ' + ');
    });
    $("#subt").click(function() {
        $("#result").val($("#result").val() + ' - ');
    });
    $("#mult").click(function() {
        $("#result").val($("#result").val() + ' * ');
    });
    $("#division").click(function() {
        $("#result").val($("#result").val() + " / ");
    });
    $("#CE").click(function() {
        $("#result").val('');
    });
    $("#equal").click(function() {
        var operations = ['+', '-', '*', '', '%', '.'];
        var lastChar = $('#result').val().split('')[$('#result').val().length - 2];
        if (operations.indexOf(lastChar) > -1) {
            alert("Error!");
            $("#result").val('');
        } else {
            $("#result").val(eval($('#result').val()));
        }
    });
});
