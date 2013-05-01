<?php

if (isset($_POST['val'])) {
    sleep(2);
    echo json_encode(array(
        'success' => array(
            'val' => $_POST['val']
        ),
    ));
}
