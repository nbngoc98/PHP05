
document.write('n chia het cho 3 thi in ra: n chia het cho 3<br>')
for (var i = 0; i < 20; i++) {
	if (i % 3 == 0){
        document.write(i + ' : la so chia het cho 3 <br>');
    }
}
document.write(i + ' : la so chia het cho 3 <br>');
for (var i = 0; i < 20; i++) {
	if (i % 5 == 0){
        document.write(i + ' : la so chia het cho  <br>');
    }
}
document.write('<br>');
for (var i = 1; i <= 20; ++i) {
    if (i % 15 == 0) {
        document.write(i + ' : la so chia het cho 15 <br>');
    } else if ( i % 3 == 0 ) {
        document.write(i + ' : la so chia het cho 3 <br>');
    } else if ( i % 5 == 0 ) {
        document.write(i + ' : la so chia het cho 5 <br>');
    } 
}
