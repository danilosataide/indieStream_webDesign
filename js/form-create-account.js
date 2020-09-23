jQuery.validator.setDefaults({
    debug: true,
    success: "valid",
  });
  $( "#form-create-account" ).validate({
    rules: {
        nome:{
            required: true,
        },
        sobrenome:{
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        emailConfirm: {
            required: true,
            email: true,
            equalTo: "#inputEmail",
        },
        password: {
            required: true,
        }
    },
    messages: {
        nome: "Campo obrigatório! ",
        sobrenome: "Campo obrigatório!",
        email: {
            required: "Campo obrigatório!",
            email: "Seu e-mail deve estar no formato nome@domínio.com",
        },
        emailConfirm: {
            required: "Campo obrigatório!",
            email: "Seu e-mail deve estar no formato nome@domínio.com",
            equalTo: "Endereço de e-mail diferente!",
        },
        password: "Campo obrigatório!"
    },
    // // errorLabelContainer: $("#form-create-account div.errors"),
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
    // errorElement : 'div',
    // errorPlacement: function(error, element) {
    //     var placement = $(element).data('error');
    //     if (placement) {
    //     $(placement).append(error)
    //     } else {
    //     error.insertAfter(element);
    //     }
    // },
    submitHandler: createAccount,
});

function createAccount() { 
    // alert("Submitted!")
    usuarios_cadastrados = JSON.parse(localStorage.getItem('usuarios_cadastrados'));

    if (usuarios_cadastrados == null){
        var usuarios_cadastrados = new Array();
    }	

    var usuario = new Object();

    usuario.nome = $('#inputNome').val();
    usuario.sobrenome = $('#inputSobrenome').val();
    usuario.email = $('#inputEmail').val();
    usuario.password = $('#inputPassword').val();

    usuarios_cadastrados.push(usuario); 
    
    localStorage.setItem('usuarios_cadastrados', JSON.stringify(usuarios_cadastrados));			
    alert('Cadastro realizado com sucesso!')
    $(location).attr('href', './index.html');
}




  