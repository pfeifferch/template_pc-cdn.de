<?php 
/** 
* Quick UA check for mobile devices. 
* @return bool 
*/

function yourls_is_mobile_device() 
{
	// Strings searched
	$mobiles = [	
	'android', 'blackberry', 'blazer',	
	'compal', 'elaine', 'fennec', 'hiptop',	
	'iemobile', 'iphone', 'ipod', 'ipad',	
	'iris', 'kindle', 'opera mobi', 'opera mini',	
	'palm', 'phone', 'pocket', 'psp', 'symbian',	
	'treo', 'wap', 'windows ce', 'windows phone' ];

// Body class	
$bodyclass = yourls_apply_filter( 'bodyclass', '' );	
$bodyclass .= ( yourls_is_mobile_device() ? 'mobile' : 'desktop' );

echo $bodyclass;

?>
