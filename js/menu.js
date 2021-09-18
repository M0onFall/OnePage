
  
  $(document).ready(function(){
    $('#btn-menu').click(function(e){
       e.preventDefault()
      $('#menu').toggle('slow')
   })
   
   $('a').click(function(e){
       e.preventDefault()

       var url = $(this).attr('href')
       $('#' + url).show()
     
       switch(url){
        case 'home':
          $('#contact').hide()
          $('#about').hide()
          $('#action').hide()
          break
        case 'contact':
          $('#home').hide()
          $('#about').hide()
          $('#action').hide()
          break
        case 'about':
          $('#contact').hide()
          $('#home').hide()
          $('#action').hide()
          break
        case 'action':
          $('#contact').hide()
          $('#home').hide()
          $('#about').hide()
          break
       }        
       


       
   })

 })