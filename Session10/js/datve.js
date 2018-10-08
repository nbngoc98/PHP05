$('#nut').click(function(){
    var a = $('#input2').val();
    var b = $('#input3').val();
    if($('#input1').val() == ""){
        $('#thongbao1').html("Không được để trống");
    }
    else{
        $('#thongbao1').html("");
    }

    if(b > a){
        $('#thongbao3').html("Số trẻ em không được lớn hơn số người lớn");
    }

    var startDate = new Date($('#input4').val());
    var endDate = new Date($('#input5').val());

    if (startDate > endDate) {
        $('#thongbao5').html("Ngày đi phải lớn hơn ngày bắt đến");
    } 

    var dNow = new Date();

    if ((startDate < dNow) && (startDate != "") )  {
        $('#thongbao4').html("Ngày đi phải lớn hơn hoặc bằng ngày hiện tại");
    }
});