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

var usuarios_admin = {
    "data": [  
        {
        "id": 1,
        "nome": "Usuário",
        "sobrenome": "Admin",
        "picture": "./img/user.jpg",
        "email": "admin@admin.com",
        "password": "admin",
        "categoria": "Administrador"
        }
    ]
}

// Caso exista no Local Storage, recupera os dados salvos
var usuarios_cadastrados = JSON.parse(localStorage.getItem('usuarios_cadastrados'));

if (!usuarios_cadastrados || usuarios_cadastrados.data == '') {
    usuarios_cadastrados = usuarios_admin
    localStorage.setItem('usuarios_cadastrados', JSON.stringify(usuarios_cadastrados));
};

function createAccount() { 
    // alert("Submitted!")
    usuarios_cadastrados = JSON.parse(localStorage.getItem('usuarios_cadastrados'));

    if (usuarios_cadastrados == null){
        var usuarios_cadastrados = new Array();
    }	

    let novoId;

	// Verificar se existe algum dado no LocalStorage
	if (usuarios_cadastrados.data.length == 0) {
		novoId = 1;
	}
	else {
		// Calcula novo ID a partir do último ID existente
		novoId = usuarios_cadastrados.data[usuarios_cadastrados.data.length - 1].id + 1;
    }

    let novoUsuario = {
        "id": novoId,
        "nome": $('#inputNome').val(),
        "sobrenome": $('#inputSobrenome').val(),
        "picture": "./img/user.jpg",
        "email": $('#inputEmail').val(),
        "password": $('#inputPassword').val(),
        "categoria": "Ouvinte"
    };
    
    // novoUsuario.nome = $('#inputNome').val();
    // novoUsuario.sobrenome = $('#inputSobrenome').val();
    // novoUsuario.email = $('#inputEmail').val();
    // novoUsuario.password = $('#inputPassword').val();

    usuarios_cadastrados.data.push(novoUsuario); 
    
    localStorage.setItem('usuarios_cadastrados', JSON.stringify(usuarios_cadastrados));			
    alert('Cadastro realizado com sucesso!')
    $(location).attr('href', './index.html');
}




  