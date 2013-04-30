<?php

if(isset($_POST['val'])){
    
    if($_POST['val'] <= 50){
        echo json_encode (array(
            'error' => array('msg'=> 'Error msg form PHP, Your Failed, you have scored below 50%'),
        ));
    }
    else{
        echo json_encode (array(
            'success' => array(
                'msg'=> 'Success msg from PHP, Yes, you are pass you have scored above 50%', 
                'custom_val' => 'custom_val value passed from php to js'
                ),
        ));
    }
}
