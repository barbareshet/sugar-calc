/*
 * Auto-generated content from the Brackets New Project extension.
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, window, document */


(function($){
//    var product = $('input[type="checkbox"]');
//    var checked = $('input[type="checkbox"]:checked');
    $('input[type="checkbox"]').change(function(){
       var total = 0;
       $('input[type="checkbox"]:checked').each(function(){
          total += isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
       });
        $("#total").val(total + ' spoons of sugar');
    });
})(jQuery);
