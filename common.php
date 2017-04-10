<?php
		$url=$_POST['Method'];
	//调用支付內網接口URL
		$data=$_POST['Params'];
    if (stristr($url,'FB') !== false) {
    $url="http://10.207.248.103:5553/WS/WAPJsonService.ashx?ServiceCode=".$url;
   }else{
    $url="http://10.207.248.103:5555/WS/WAPJsonService.ashx?ServiceCode=".$url;
   }
function getData($url,$data){
  $ch = curl_init();
  $timeout = 60; 
  curl_setopt ($ch, CURLOPT_URL, $url); 
  curl_setopt($ch, CURLOPT_POST, true); 
  curl_setopt($ch, CURLOPT_POSTFIELDS, $data); 
  curl_setopt($ch,CURLOPT_HEADER,0);  
  curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1); 
  curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout); 
  $file_contents = curl_exec($ch); 
  if ($file_contents===false) {
     echo 'Curl error: ' . curl_error($ch) . "<br>\n\r";
     exit();
  }
  curl_close($ch); 
  return $file_contents; 
}
$result=getData($url,$data);
echo $result;
?>