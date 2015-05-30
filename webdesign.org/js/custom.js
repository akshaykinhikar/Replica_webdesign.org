$(document).ready(function(){
    $("#toggle_sec1_button").click(function(){
    	// alert("toggle working");

    	var visible = $('#sec').is(':visible');

                if(visible) {
                    // alert("visible");
                    $("#sec").hide(1000);
        			$(".menubarStyle").css("margin-top","0px");
        			alert("adding css");
                    $("#sec_three").css("margin-top","75px");
                    $("#sec_four").css("margin-top","165px");

                }
                else
                {
                    // alert("hidden");
                    $("#sec").show(1000);
        			$(".menubarStyle").css("margin-top","50px");
        			$("#sec_three").css("margin-top","125px");
                    $("#sec_four").css("margin-top","215px");
                }
    });
});
