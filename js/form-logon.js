
jQuery.validator.setDefaults({
  debug: true,
  success: "valid",
});
$( "#form-logon" ).validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
    }
  },
  messages: {
    email: {
      required: "Campo obrigatório!",
      email: "Seu endereço de e-mail deve estar no formato nome@domínio.com",
    },
    password: "Campo obrigatório!"
  },
  // errorLabelContainer: $("#form-logon div.errorHolder"),
  highlight: function(element, errorClass, validClass) {
    $(element).addClass(errorClass).removeClass(validClass);
    $(element.form).find("label[for=" + element.id + "]")
      .addClass(errorClass);
  },
  // unhighlight: function(element, errorClass, validClass) {
  //   console.log("element.name: " + element.name);
  //   $(element).removeClass(errorClass).addClass(validClass);
  //   $(element.form).find("label[for=" + element.name + "]")
  //     .removeClass(errorClass);
  // },
  submitHandler: logonAccount,
});

function logonAccount(){
  usuarios_cadastrados = JSON.parse(localStorage.getItem('usuarios_cadastrados'));

  if (usuarios_cadastrados == null){
      var usuarios_cadastrados = new Array();
  }	

  var email_form = document.getElementById('inputEmail').value;
  var password_form = document.getElementById('inputPassword').value;
  var aux = false;

  for (var i = 0; i < usuarios_cadastrados.data.length; i++)
  {
    if ((usuarios_cadastrados.data[i].email == email_form) && (usuarios_cadastrados.data[i].password == password_form))
    {
        aux = true;
        usuarioLogado(usuarios_cadastrados.data[i]);
        break;
    }
  }

  if(!aux)
  {
    // alert("Não foi possível realizar logon!");
    $('#exampleModal').modal('show');
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputPassword').value = '';
  } else
  {
    localStorage.setItem('musicas_filtro_genero', JSON.stringify(0));
    $(location).attr('href', './home-page.html');
  }
}

function usuarioLogado(usuario) {
  usuario_logado = JSON.parse(localStorage.getItem('usuario_logado'));

  if (!usuario_logado || usuario_logado.data == ''){
    usuario_logado = {
      "data": [  
          {
          "id": usuario.id,
          "nome": usuario.nome,
          "sobrenome": usuario.sobrenome,
          "email": usuario.email,
          "categoria": usuario.categoria
          }
      ]
    }
  }	else {
    usuario_logado.data[0].id = usuario.id;
  }
  localStorage.setItem('usuario_logado', JSON.stringify(usuario_logado));
}