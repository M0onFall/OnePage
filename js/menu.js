
  
  $(document).ready(function(){
    $('#btn-menu').click(function(e){
       e.preventDefault()
      $('#menu').toggle('slow')
   })
   
   $('a').click(function(e){
       e.preventDefault()

       var url = $(this).attr('href')// add na variável o href
       $('#' + url).show()

       const urls = ['contact','home','about','action']
      
      //varre o vetor e o que for diferente aplica o hide
       for(let x in urls){ 
         if(urls[x] != url){
           $('#' + urls[x]).hide()
         }
       }


       
   })

 })