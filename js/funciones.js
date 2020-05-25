window.onload = iniciar(); //{
			//alert('OK');
		//}

function iniciar(){

	document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('.sidenav');
                var instances = M.sidenav.init(elems, options);
            });

            // Or with jQuery

            $(document).ready(function () {
                $('.sidenav').sidenav();
            });
            //carrusel

            document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('.carousel');
                var instances = M.Carousel.init(elems, options);
            });

            // Or with jQuery

            $(document).ready(function () {
                $('.carousel.carousel-slider').carousel({ fullWidth: true });
            });


            var instance = M.Carousel.init({
                fullWidth: true
            });

            // Or with jQuery

            $('.carousel.carousel-slider').carousel({
                fullWidth: true
            });

            //select

            document.addEventListener('DOMContentLoaded', function () {
                var elems = document.querySelectorAll('select');
                var instances = M.FormSelect.init(elems);
            });

            // Or with jQuery

            $(document).ready(function () {
                $('select').material_select();
            });

}