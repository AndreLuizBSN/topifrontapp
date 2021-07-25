function showModal() {
    $('.modal_background').show()
}

function convertBase64( id ) {
  //console.log('converter base 64 ' + id);

  var reader = new FileReader();

  reader.readAsDataURL($('#arquivo' + id).prop('files')[0]);
  reader.onload = function () {
    var base64 = reader.result;

    base64 = base64.replace(base64.substring(0, base64.indexOf('base64,') + 7),'')

    $('#arquivoBase64-'+id).text(base64);

  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };

}

function formatarMascara(id) {

  var c = $('#'+id).val();

  if ( c.length > 4 ) {
    c = c.substring(0,4)
  } else if ( c.length < 4 ) {
    c = c + ( '0'.repeat(4 - c.length) )
  }

  if ( ! $.isNumeric(c) ) {
    $('#'+id).val('00:00')
  } else {

    var hora = c.substring(0,2)
    var minuto = c.substring(2,4)

    if ( parseInt(hora) > 23 ) {
      hora = '00'
    }

    if ( parseInt(minuto) >= 60 ) {
      minuto = '00'
    }

    $('#'+id).val(hora+':'+minuto)

  }

}

function formatarMascaraData(id) {

  var c = $('#'+id).val();

  if ( c.length > 8 ) {
    c = c.substring(0,4)
  } else if ( c.length < 8 ) {
    c = c + ( '0'.repeat(8 - c.length) )
  }

  if ( ! $.isNumeric(c) ) {
    $('#'+id).val('00/00/0000')
  } else {

    var dia = c.substring(0,2)
    var mes = c.substring(2,4)
    var ano = c.substring(4,8)

    $('#'+id).val(dia+'/'+mes+'/'+ano)

  }

}




$( document ).ready(function() {



    $('.msgs').hide();

    $( ".dados-user" ).hover(function() {
        $( ".dados-usuario-sessao" ).show();
      }, function() {

        $( ".dados-usuario-sessao" ).hide();
      }
    );

    $('.close-msg').click(function() {
      $('.general-message').slideUp()
    });

    function timerHide( id ) {
      var timer = setTimeout( function() {

          $("#"+id).hide(500);

      }, 5000 );
    }

    function myTimer() {
      var timer = setTimeout( function() {

        $('.general-message').each(function() {
          if ( $(this).css('display') == 'block' ) {
            timerHide($(this).attr('id'));
          }
        });

        myTimer();
      }, 100 );
    }

    myTimer();
    /*
    $('.cpf-mask').mask('000.000.000-00');
    $('.cnpj-mask').mask('00.000.000/0000-00');
    $('.cep-mask').mask('00.000-000');
    console.log('jh');*/

});

function zoonIn() {
  $( "#default-image-zoom" ).on( "mousemove", function( event ) {
    var offset = $(this).offset();/*
    var imageSize = {
        height: $(this).children('#default-image').height(),
        width: $(this).children('#default-image').width()
    }
    console.log(imageSize);*/
    var x = parseInt((( event.pageX - offset.left ) *-1)).toString() + "px";
    var y = parseInt(((event.pageY - offset.top ) *-2)).toString() + "px";
    //$('#default-image').css({'width':'auto', 'margin-left':x, 'margin-top':y})
    if ( $(window).width() > 767) {
      $('#imagem-zoom').css('display', 'block')
      $('#imagem-zoom').css({'background-position-x':x, 'background-position-y': y})
    } else {
      $('#default-image').css({'width':'auto', 'margin-left':x, 'margin-top':y})
    }
  });
}

function zoonOut() {
  $( "#default-image-zoom" ).on( "mouseout", function( event ) {
    if ( $(window).width() > 767) {
      $('#imagem-zoom').css('display', 'none')
    } else {
      $('#default-image').css({'width':'100%','margin-left':'0px', 'margin-top':'0px'})
      $('#imagem-zoom').css('display', 'none')
    //$('#imagem-zoom').css('display', 'none')
    }
  });
}


$('.input-item').on('keyup', 'input', function(event) {
  if (event.which == 13) {
    console.log($(this).attr('id'));
    /*var generico = $("#tabela").find('input:visible');
    var indice = generico.index(event.target) + 1;
    var seletor = $(generico[indice]).focus();

    if (seletor.length == 0) {
      event.target.focus();
    }*/
  }
});


$('.card-produto').mouseenter(function() {
  $('.produto-info').hide();
  $('.produto-compra-rapida').hide();
  //$(this).children($('.produto-info')).show();
  console.log("kjsfhgdhuighdkjjkdg");
});
