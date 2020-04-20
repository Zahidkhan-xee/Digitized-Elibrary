function raisethumb( this ) {
              alert("i am in")
              //alert(this.lastchild)
}

function Article() {
                            var temp = document.getElementById('box')
                            var err = document.getElementById("errmsg")
                            if (temp.value == "") {
                              err.innerHTML = "<p class=\"alert alert-danger\"><i class=\"glyphicon glyphicon-remove-sign\" style = \"font-size : 20px;\"></i> Write Article To Post!\
                                               <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a></p>";
                              err.style.display = "block";
                              temp.focus()
                            }
                            else{
                              err.innerHTML = "<p class=\"alert alert-success\"> <i class=\"glyphicon glyphicon-ok-sign \" style = \"font-size : 20px;\"></i>The Article Can Be Posted Successfully.\
                                               <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\
                                               </p>";       //will clear the Error msg
                            }
}

                         
                         var fixed = false;
                              $(document).scroll(function() {
                                  if ($(this).scrollTop() > 250) {
                                                    $('#scroll').show(1000, function() {
                                                        $('#scroll').css({
                                                            position: 'fixed',
                                                        });                                 //scroll 
                                                   });               //scroll function
                                } else {

                                              $('#scroll').hide(300, function() {
                                                  $('#scroll').css({
                                                  display: 'none'
                                                  });
                                               });   
                                  }                         //else
                               });
                          //End Of scroll function
