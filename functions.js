
var CusotmClass = function CusotmClass() {

    /**
     * Getting this class instance
     */
    var self = this;
    
    /**
     * Extending CusotmClass with ajaxmanger class
     */
    $.extend(self,new AjaxManager());
    
    /**
     * Allow only alphanumaric
     */
    var exp = /^[a-zA-Z0-9\-]+$/g;
    
    // email regex
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    /**
     * This will initate the form slider
     * @author Amir M
     */
    self.initForm = function initForm(){
        console.log("Form");
    }
    
    /**
     * This will load the slider
     * @author Amir M
     */
    self.initSlider = function initSlider(){
        console.log("Slider");
    }
    
    
    
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Jquery brower loaded
$(function(){
    
    // class custom class object
    var custom = new CusotmClass();
       
    /**
     * calling all the method which should be initialized the
     * when the brower is loaded
     */
    custom.init( );
    
});

