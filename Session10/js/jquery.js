$('#demo').click(function(){
	alert('Hello id');
});
$('.demo1').click(function(){
	alert('Hello class');
});
$('h2').click(function(){
	alert('Hello type');
});
//thay đổi nội dung html của phần tử
$('document').ready(function(){
	$('h4').click(function(){
		$('h4').html("Tôi tên là <b>Ngọc</b>");
	});
});
//thay doi thuoc tính cua phan tu
$(document).ready(function(){
    $(".btn3").click(function(){
        $("#test").val("Ngoc");
    });
});
//thay doi stype của phan tu

//an/hien phan tu
$('document').ready(function(){
	$('.bt1').click(function(){
		$('.demo2').hide();
	});
	$('.bt2').click(function(){
		$('.demo2').show();
	});
});