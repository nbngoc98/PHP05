    $('#submit').click(function(){
        if($('#input1').val()==""){
            $('#thongbao1').html('* Không được để trống tên');
        }
        else{
          $('#thongbao1').html("");
        }

        if($('#input2').val()==""){
            $('#thongbao2').html('* Mời chọn năm sinh');
        }
        else{ 
                if (($('#input2').val() > Date.now()) || ($('#input2').val() <= 1900)){
                    $("#thongbao2").html("Năm sinh lớn hơn 1900, nhỏ hơn năm hiện tại");
                } else if ($('input[name = gender]:checked').val() == "Nam"){
                    window.location.assign("nam.html");
                } else if ($('input[name = gender]:checked').val() == "Nu"){
                    window.location.assign("nu.html");
                }
        }
        // if($('#input2').val()>2000){
        //             $("#nen").css({"background-color": "blue"});
        //             window.location.assign("nam.html");
        //         }
        //         else{
        //             $('#nen').css({"background-color": "green" });
        //             window.location.assign("nu.html");
        // }

        if ($('input[name = gender]:checked').val() == null) {
            $("#thongbao4").html('Vui lòng chọn giới tính!');
        } else {
            $("#thongbao4").html("");
        }
        if($('#input3').val()==""){
            $('#thongbao3').html('* Không được để trống');
        }
        else{
          $('#thongbao3').html("");
        }
    
        localStorage.setItem("name", $('#input1').val());
        localStorage.setItem("year", $('#input2').val());
        localStorage.setItem("gender", $('input[name = gender]:checked').val());
    });