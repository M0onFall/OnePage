
  
  $(document).ready(function(){
    $('#btn-menu').click(function(e){
       e.preventDefault()
      $('#menu').toggle('slow')
   })
   
   $('a').click(function(e){
       e.preventDefault()
     
                
       var url = $(this).attr('href')
       $('#' + url).show()
      
     if(url == "contact"){
       $('a').attr('')
     }
      
       
   })

 })