window.onload = function () {
    var mq = window.matchMedia( "(min-width: 768px)" ),
        Wrapper = $("#listagem-wrapper"),
        bMais = $("#b-mais"),
        guia = $('body').data('guia'),
        loader = $('#loader');

    function LoadMais(NomeArquivo, Tempo){
        $.ajax({
            url: "includes/"+NomeArquivo+".html",
            dataType: "html",
            success: function(data) {
                window.setTimeout(function() {
                    Wrapper.html(data).addClass('fadein');
                }, Tempo);                
            }
        });
    }

    function LoadMaisMobile(NomeArquivo){
        bMais.on('click', function(e) { 
            e.preventDefault();

            loader.addClass('fadein');
            bMais.addClass('fadein');        

            LoadMais(NomeArquivo, 2000);
            window.setTimeout(function() {
                // Scroll('listagem-wrapper');
                loader.removeClass('fadein').addClass('fadeout');
                bMais.removeClass('fadein').addClass('fadeout');
            }, 2100);
                    
        });
    }

    // function Scroll(id){
    //     $('html,body').animate({
    //         scrollTop: $("#"+id).offset().top},
    //         1000);
    // }

    if( mq.matches ){
            
        switch (guia) {
            case "home":
                LoadMais('listagem-noticias-home', 1000);
                break;

            case "noticias":
                LoadMais('listagem-noticias', 1000);
                break;

            case "locais":
                LoadMais('listagem-locais', 1000);
                break;

        }
    } else {

        switch (guia) {
            case "home":
                LoadMaisMobile('listagem-noticias-home');
                break;

            case "noticias":
                LoadMaisMobile('listagem-noticias');
                break;

            case "locais":
                LoadMaisMobile('listagem-locais');
                break;

        }

    }
    

    


}