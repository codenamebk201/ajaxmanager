<!DOCTYPE html>
<html>
    <head>
        <title>AjaxManager Example</title>
        <style>

            .overlay {
                background: #aaaaaa !important;
                opacity: .60;
                filter: Alpha(Opacity=60);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            [class^="box"].active {
                visibility: visible;
                opacity: 1;
                -moz-transform: none;
                -ms-transform: none;
                -webkit-transform: none;
            }

            [class^="box"] {
                position: fixed;
                z-index: 10000;
                top: 50%;
                left: 0;
                width: 100%;
                height: 0;
                text-align: center;
                visibility: hidden;
                opacity: 0;

            }

            [class^="box"] > div.wrap {
                display: inline-block;
                zoom: 1;
                text-align: left;
                margin: auto;
                background: white;
                box-shadow: 0 0 6px rgba(0, 0, 0, 0.8), 0 0 0 1px #313131;
                border: 1px solid rgba(0, 0, 0, 0.5);
            }

        </style>
        <!-- baseurl -->
        <script type="text/javascript">var baseurls = "http://localhost/github/ajaxmanager/";</script>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
        <script type="text/javascript" src="ajaxmanager.js"></script>
        <script type="text/javascript">
        
            
            function callSingle(val){
              
                myajax.ajax({
                    show_val : false,
                    url :'test.php',
                    data: {
                        val : val 
                    },
                    success: {
                        error : {
                            msg : 'Error msg form js ',
                            callback: function(){
                                alert('Function called at error!')
                            }
                        },
                        before:function(){
                            alert('Function called BEFORE Success!')
                        },
                        success:{
                            msg : 'Success msg from js',
                            callback: function(obj){
                                alert('Function called at Success!')
                                console.log(obj)
                            }
                        },
                        after:function(){
                            alert('Function called AFTER Success!')
                        }
                    }
                });
              
            }
            
            /**
             * Success call
             */
            function successCall(){
                callSingle(51)
            }
            
            /**
             * Error call
             */
            function errorCall(){
                callSingle(13)
            }
            
            /**
             * Calling Queue
             */
            function callQueue(){
                myajax.ajaxQueue({ queue: [ajaxOne(), ajaxTwo(), ajaxThree()] });
            }
            
            /**
             * Ajax one function
             */
            function ajaxOne(){
              
                myajax.ajax({
                    show_val : false,
                    url :'test.php',
                    data: {
                        val : Math.round ( Math.random() * 100)
                    },
                    success: {
                        error : {
                            msg : '',
                            callback: function(){}
                        },
                        success:{
                            msg : '',
                            callback: function(obj){
                                console.log(obj)
                            }
                        }
                        
                    }
                });
              
            }
            
            /**
             * Ajax twi function
             */
            function ajaxTwo(){
              
                myajax.ajax({
                    show_val : false,
                    url :'test.php',
                    data: {
                        val : Math.round ( Math.random() * 100)
                    },
                    success: {
                        error : {
                            msg : '',
                            callback: function(){}
                        },
                        success:{
                            msg : '',
                            callback: function(obj){
                                console.log(obj)
                            }
                        }
                        
                    }
                });
              
            }
            
            /**
             * Ajax three function
             */
            function ajaxThree(){
              
                myajax.ajax({
                    show_val : false,
                    url :'test.php',
                    data: {
                        val : Math.round ( Math.random() * 100)
                    },
                    success: {
                        error : {
                            msg : '',
                            callback: function(){}
                        },
                        success:{
                            msg : '',
                            callback: function(obj){
                                console.log(obj)
                            }
                        }
                        
                    }
                });
              
            }
            
            /**
             * Ajax input function
             */
            function ajaxInput(val){
              
                myajax.ajax({
                    show_val : false,
                    cancel_pervious: true,
                    url :'ajax.php',
                    data: {
                        val : val
                    },
                    success: {
                        error : {
                            msg : '',
                            callback: function(){}
                        },
                        success:{
                            msg : '',
                            callback: function(obj){
                                $("#show_value").after("<span>"+obj.val+"</span>")
                            }
                        }
                        
                    }
                });
              
            }
            
        </script>

    </head>
    <body>
        <br />
        <p>
            AjaxManager is an extended version of jquery ajax method, this class takes care of error by itself and also have the functionality to add custom error and success
            messages. There are both success and error callback method which can be set and will be called when they are triggered. Success callback will be called when there 
            ajax request is success and error callback will be called when there is an error sent my the user.
        </p>
        <a href="#" onclick="successCall()"> Run Single Success Ajax request</a>
        <br />
        <a href="#" onclick="errorCall()"> Run Single Error Ajax request</a>
        <br /><br />
        <a href="#" onclick="callQueue()"> Run Queue Ajax request</a>
        <br /><br />
        Ajax call will occur after every keypress it will be after the user has stopped <br />
        <input type="text" value="" id="ajaxinput" onkeyup="ajaxInput(this.value)"><span id="show_value"></span>
        <br />
    </body>
</html>
