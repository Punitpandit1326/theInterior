       function onsubmitform(event) {
            event.preventDefault();

            var submitproc = true;
            $(".inponr").each(function() {
                if ($(this).val() == "" || $(this).val() == " ") {
                    $(this).parents(".validtn").find(".errorspan").css("display", "block");
                    submitproc = false;
                    
                } else {
                    
                    $(this).parents(".validtn").find(".errorspan").css("display", "none");
                }
            });
			
           
			
			    //  email validation function
  function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
  }

            // email validation
            var email = $("#formone .emailinp").val();
            if (!isEmail(email) && (email != "")) {
                $(".erroremailspan").css("display", "block");
                submitproc = false;
            } else {
                $(".erroremailspan").css("display", "none");

            }

            if (submitproc) {
                console.log("vp");
                $('.lodingsect').show();
                $(".sub").attr("disabled", "disabled"); 

                var requests = [
				   	{
                        url: 'https://script.google.com/macros/s/AKfycbzX9Rgf1qK5UDBgPN68u2zBS4GreyGp5xJQys_RcGpZuRVOeaMc/exec',
                        data: $("#formone").serialize(),
                        dataType: 'json'
                    },
                    
                    
                    // {
                    //     url: 'https://script.google.com/macros/s/AKfycbw2JB5FeIvQRZPZ5WoFokJnwxtc4PB930_Z_h6tjDDg2a-vjlSfz35d5G8pObqrkw28/exec',
                    //     data: $("#formone").serialize(),
                    //     dataType: 'json'
                    // },
                    				
                ];

                var successHandler = function(data) {

                    window.location = "thank-you.html";
                    document.getElementById("formone").reset();
                }

                for (var i = 0, l = requests.length; i < l; i++) {
                    $.ajax({
                        url: requests[i].url,
                        data: requests[i].data,
                        type: 'POST',
                        dataType: requests[i].dataType,
                        success: successHandler
                    });
                }

            }
        }
		
		
		
function onsubmitformt(event) {
            event.preventDefault();

            var submitproct = true;
            $(".inponrt").each(function() {
                if ($(this).val() == "" || $(this).val() == " ") {
                    $(this).parents(".validtnt").find(".errorspan").css("display", "block");
                    submitproct = false;
                } else {
                    $(this).parents(".validtnt").find(".errorspan").css("display", "none");
                }
            });
			
			
			    //  email validation function
  function isEmail(email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
  }

            // email validation
            var email = $("#formtwo .emailinp").val();
            if (!isEmail(email) && (email != "")) {
                $(".erroremailspan").css("display", "block");
                submitproct = false;
            } else {
                $(".erroremailspan").css("display", "none");

            }

            if (submitproct) {
                $('.lodingsectt').show();
                $(".sub").attr("disabled", "disabled"); 

                var requests = [
                    {
                        url: 'https://script.google.com/macros/s/AKfycbzX9Rgf1qK5UDBgPN68u2zBS4GreyGp5xJQys_RcGpZuRVOeaMc/exec',
                        data: $("#formtwo").serialize(),
                        dataType: 'json'
                    },
                    // {
                    //     url: 'https://script.google.com/macros/s/AKfycbw2JB5FeIvQRZPZ5WoFokJnwxtc4PB930_Z_h6tjDDg2a-vjlSfz35d5G8pObqrkw28/exec',
                    //     data: $("#formtwo").serialize(),
                    //     dataType: 'json'
                    // },
					 		
                ];

                var successHandler = function(data) {

                    window.location = "thank-you.html";
                    document.getElementById("formtwo").reset();
                }

                for (var i = 0, l = requests.length; i < l; i++) {
                    $.ajax({
                        url: requests[i].url,
                        data: requests[i].data,
                        type: 'POST',
                        dataType: requests[i].dataType,
                        success: successHandler
                    });
                }

            }
        }