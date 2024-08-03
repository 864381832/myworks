<?php
$referer=$_SERVER['HTTP_REFERER'];
if(!strpos($referer,'infocenter')){
	header('Location: moren.png');
	exit();
}
$urlArr = explode('/',$referer);
$qq=$urlArr['3'];
$username = getQQName($qq);
$fontfile = "fonts/msyh.ttf";
header("Content-type: image/png");
$image="bj.png";
$im=imagecreatefrompng($image);
$ys1=ImageColorAllocate($im,10,121,125);
ImageTTFText($im,25,0,108,604,$ys1,$fontfile,$username);
Imagegif($im);
ImageDestroy($im);
exit();
function getQQNick($qq){
	$str = file_get_contents('http://r.qzone.qq.com/cgi-bin/user/cgi_personal_card?uin='.$qq);
	$pattern = '/'.preg_quote('"nickname":"','/').'(.*?)'.preg_quote('",','/').'/i';
	preg_match ( $pattern,$str, $result );
	return $result[1];
}

function getQQName($qq){
	if (!$username) {
		$username = getQQNick($qq);
	}
	return $username;
}
?> 