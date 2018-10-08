function sumNumber(a, b) {
	return parseInt(a) + parseInt(b);
}
$('#number1').keyup(function(){
	var a = $('#number1').val();
	var b = $('#number2').val();
    $('#result').html(sumNumber(a, b));
});
$('#number2').keyup(function(){
	var a = $('#number1').val();
	var b = $('#number2').val();
	$('#result').html(sumNumber(a, b));
});
