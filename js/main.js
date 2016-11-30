$(document).scroll(function() {
        if ( $(this).scrollTop() > 30) {
            $('.blanco').fadeOut();
            $('.nav').css("position","fixed");
            $('.nav').css("z-index","9999");
        } else {
            $('.blanco').fadeIn();
            $('.nav').css("position","inherit");
           
        }
    });
$(document).ready(function() {

  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({full_width: true});
  $('.modal-trigger').leanModal();
  $('.slider').slider({full_width: true}); 
  var ctx = $("#myChart");
  var myChart = new Chart(ctx,
    {
      type: 'doughnut',
      responsive: true,

    data: {
        labels: ["BANDES Uruguay", "FUCAC", "CABAL"],
        datasets: [{
            label: 'Participación accionaria',
            data: [77.40, 14.50, 8.10],
            backgroundColor: [
                '#e34',
                '#85d34c',
                '#75afb5',

            ],
            borderColor: [
              '#fff',
              '#fff',
              '#fff',
            ],
            borderWidth: 2
        }]
    },
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(0, 0, 0)',
                fontSize: 30
            },
        }
    }
    })

    //0 elimina los controles del video - 1 Los habilita
	controls=1;
	//0 Elimina la información del video y las opciones para compartir - 1 Los habilita
	showinfo=0;
	//0 elimina los videos recomendados al finar la reproducción - 1 Los habilita
	rel=0;
	$.ajax({
		url: 'xml/videos.xml',
		dataType:'xml',
		success:function(data){
			$(data).find('playlist video').each(function(){
				var titulo= $(this).attr('titulo');
				var id= $(this).attr('id');
				var datos=$('.reproductor__thumbs ul li').size();
				var urlVideo= id;
				var urlImg ="<li id='"+id+"' class='thumb"+ datos +"'><figure><figcaption>"+titulo+"</figcaption><img src='http://img.youtube.com/vi/"+id+"/0.jpg' /></figure></li>";
				$('.reproductor__thumbs ul').append(urlImg);
			})
			idLoad= $('.reproductor__thumbs ul li:first').attr("id");
			$('.reproductor__frame--play').append("<iframe src='https://www.youtube.com/embed/" + idLoad + "?rel=" + rel + "&controls=" + controls +"&showinfo=" + showinfo + "' frameborder='0' allowfullscreen></iframe>");
			$('.reproductor__thumbs ul li').click(function(){
				idVideo=$(this).attr("id");
				$('.reproductor__frame--play').empty();
				$('.reproductor__frame--play').append("<iframe src='https://www.youtube.com/embed/" + idVideo + "?rel=" + rel + "&controls=" + controls +"&showinfo=" + showinfo + "' frameborder='0' allowfullscreen></iframe>");
			})
		},
		error: function(){
			$('.reproductor__thumbs ul').text('error');
		}
	})

    
    

   



});
