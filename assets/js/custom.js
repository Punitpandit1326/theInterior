$(document).ready(function () {
  
        // var links = $('.utm_binder a');
        // var utm = /(utm_source=.*)&(utm_medium=.*)&(utm_campaign=.*)&(utm_term=.*)&(utm_content=.*)/gi.exec(window.location.href);
        // for(var i=0;i<links.length;i++){
        // console.log(links[i].href = links[i].href + "?" + utm[0]);
        // }
        
  $(".cphone").intlTelInput({
    // allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "on",
    // dropdownContainer: "body",
    // excludeCountries: ["us"],
    // geoIpLookup: function(callback) {
    //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
    //     var countryCode = (resp && resp.country) ? resp.country : "";
    //     callback(countryCode);
    //   });
    // },
    // initialCountry: "auto",
    nationalMode: false,
    // numberType: "MOBILE",
    //onlyCountries: ['in', 'uae', 'ch', 'ca', 'do'],
    preferredCountries: ['in', 'ae', 'us', 'gb', 'kw', 'om', 'sa', 'qa'],
 
 
    // separateDialCode: true,
    // utilsScript: "http://www.asd.com/campaigns/wp-content/themes/asd/js/utils.js"
  });
  //  email validation function
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

 
  $(".cphone").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
    if (e.which != 43 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
      //display error message
      //$("#errmsg").html("Digits Only").show().fadeOut("slow");
      return false;
    }
  });
        
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        
      // settingutm tags
      var utm_medium = getParameterByName('utm_medium');
      var utm_source = getParameterByName('utm_source');
      var utm_campaign = getParameterByName('utm_campaign');
      var utm_term = getParameterByName('utm_term');
      var utm_content = getParameterByName('utm_content');
	  
	  var utm_mediumt = getParameterByName('utm_mediumt');
      var utm_sourcet = getParameterByName('utm_sourcet');
      var utm_campaignt = getParameterByName('utm_campaignt');
      var utm_termt = getParameterByName('utm_termt');
      var utm_contentt = getParameterByName('utm_contentt');

      $("input[name*='utm_medium']").val(utm_medium);
      $("input[name*='utm_source']").val(utm_source);
      $("input[name*='utm_campaign']").val(utm_campaign);
      $("input[name*='utm_term']").val(utm_term);
      $("input[name*='utm_content']").val(utm_content);
	  
	  $("input[name*='utm_mediumt']").val(utm_medium);
      $("input[name*='utm_sourcet']").val(utm_source);
      $("input[name*='utm_campaignt']").val(utm_campaign);
      $("input[name*='utm_termt']").val(utm_term);
      $("input[name*='utm_contentt']").val(utm_content);
      
    function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd } if (mm < 10) { mm = '0' + mm }
    today = yyyy + "-" + mm + "-" + dd;
 
    document.getElementById("submission_date").value = today;
	 document.getElementById("submission_datet").value = today;
  }
 
  //call getDate() when loading the page
  getDate();
 
 
  function getMonth() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var now = new Date();
    var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
    document.getElementById("submission_month").value = thisMonth;
	 document.getElementById("submission_montht").value = thisMonth;
  }
 
  //call getMonth() when loading the page
  getMonth();
  
  //   page url
var url      = window.location.href;   
document.getElementById("page_url").value = url;
document.getElementById("page_urlt").value = url;
});


$("[data-toggle=modal]").click(function(evt){
  evt.preventDefault();
$('.mdtimepicker').addClass('timemodal')
});
$("input").click(function(evt){
  evt.preventDefault();

});