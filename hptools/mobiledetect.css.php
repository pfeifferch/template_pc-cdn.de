<?php 
/** 
* Quick UA check for mobile devices. 
* @return bool 
*/



/**
 * Quick UA check for mobile devices.
 * @return bool
 */
function yourls_is_mobile_device() {
	// Strings searched
	$mobiles = [
		'android', 'blackberry', 'blazer',
		'compal', 'elaine', 'fennec', 'hiptop',
		'iemobile', 'iphone', 'ipod', 'ipad',
		'iris', 'kindle', 'opera mobi', 'opera mini',
		'palm', 'phone', 'pocket', 'psp', 'symbian',
		'treo', 'wap', 'windows ce', 'windows phone'
    ];

	// Current user-agent
	$current = strtolower( $_SERVER['HTTP_USER_AGENT'] );

	// Check and return
	$is_mobile = ( str_replace( $mobiles, '', $current ) != $current );
	return (bool)yourls_apply_filter( 'is_mobile_device', $is_mobile );
}



// Body class	
$bodyclass = yourls_apply_filter( 'bodyclass', '' );	
$bodyclass .= ( yourls_is_mobile_device() ? 'mobile' : 'desktop' );

echo $bodyclass;

?>
