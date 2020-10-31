// declara um conjunto fake de dados para músicas
// alert("bem vindo");

var dbfake = {
    "data": [
        {
        "id":	1,
        "nome":	"Eternal Garden",
        "artista": "Dan Henig",
        "genero":	"Ambiente",
        "clima":	"Calmo",
        "imagem": "https://4.bp.blogspot.com/-hT936X_gEr8/UzFxxXHFrRI/AAAAAAAAoeQ/rF7DUHWGXFs/s1600/Black_Keys_Turn_Blue_album_capa.jpg",
        "audio": "./audio/Eternal Garden - Dan Henig.mp3"
        },
        {
        "id":	2,
        "nome":	"Buckeye Bonzai",
        "artista": "Vans in Japan",
        "genero":	"Rock",
        "clima":	"Vibrante",
        "imagem": "https://studiosol-a.akamaihd.net/letras/272x272/albuns/9/7/6/e/678361571331412.jpg",
        "audio": "./audio/Buckeye Bonzai - Vans in Japan.mp3"
        },
        {
        "id":	3,
        "nome":	"Beside Me",
        "artista": "Patrick Patrikios",
        "genero":	"Dance e eletrônica",
        "clima":	"Sombrio",
        "imagem": "https://cdn.pixabay.com/photo/2020/09/28/10/07/face-mask-5609287_960_720.png",
        "audio": "./audio/Beside Me - Patrick Patrikios.mp3"
        },   
        {
        "id":	4,
        "nome":	"Can-Can",
        "artista": "Offenbach",
        "genero":	"Clássica",
        "clima":	"Dramático",
        "imagem": "https://cdn.pixabay.com/photo/2020/06/08/10/00/black-5273871_1280.jpg",
        "audio": "./audio/Can-Can (by Offenbach) - Offenbach.mp3"
        },   
        {
        "id":	5,
        "nome":	"Angel Guides",
        "artista": "Jesse Gallagher",
        "genero":	"Ambiente",
        "clima":	"Inspirador",
        "imagem": "https://cdn.pixabay.com/photo/2020/10/01/09/35/bee-5618012_1280.jpg",
        "audio": "./audio/Angel Guides - Jesse Gallagher.mp3"
        },   
        {
        "id":	6,
        "nome":	"Beneath the Surface",
        "artista": "South London HiFi",
        "genero":	"Dance e elêtronica",
        "clima":	"Vibrante",
        "imagem": "https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_1280.jpg",
        "audio": "./audio/Beneath the Surface - South London HiFi.mp3"
        },   
        {
        "id":	7,
        "nome":	"Educated Man",
        "artista": "Max McFerren",
        "genero":	"Dance e eletrônica",
        "clima":	"Alegre",
        "imagem": "https://cdn.pixabay.com/photo/2020/09/06/22/11/neptune-5550216_960_720.jpg",
        "audio": "./audio/Educated Man - Max McFerren.mp3"
        },
        {
        "id":	8,
        "nome":	"Cumulus Nimbus",
        "artista": "Quincas Moreira",
        "genero":	"Ambiente",
        "clima":	"Calmo",
        "imagem": "https://cdn.pixabay.com/photo/2020/09/27/23/39/cow-5608144_1280.jpg",
        "audio": "./audio/Cumulus Nimbus - Quincas Moreira.mp3"
        },
        {
        "id":	9,
        "nome":	"Cover",
        "artista": "Patrick Patrikios",
        "genero":	"Dance e eletrônica",
        "clima":	"Vibrante",
        "imagem": "https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_960_720.jpg",
        "audio": "./audio/Cover - Patrick Patrikios.mp3"
        },
        {
        "id":	10,
        "nome":	"Ocean View",
        "artista": "Patrick Patrikios",
        "genero":	"Dance e eletrônica",
        "clima":	"Animado",
        "imagem": "https://cdn.pixabay.com/photo/2020/10/12/14/11/meadow-5648849_1280.jpg",
        "audio": "./audio/Ocean View - Patrick Patrikios.mp3"
        },
        {
        "id":	11,
        "nome":	"Moons",
        "artista": "Patrick Patrikios",
        "genero":	"Dance e eletrônica",
        "clima":	"Inspirador",
        "imagem": "https://cdn.pixabay.com/photo/2020/04/03/19/02/virus-4999857_1280.png",
        "audio": "./audio/Moons - Patrick Patrikios.mp3"
        },
        {
        "id":	12,
        "nome":	"Find Your Way Beat",
        "artista": "Nana Kwabena",
        "genero":	"Pop",
        "clima":	"Inspirador",
        "imagem": "https://cdn.pixabay.com/photo/2020/05/04/18/55/avocado-5130214_960_720.png",
        "audio": "./audio/Find Your Way Beat - Nana Kwabena.mp3"
        },
        {
        "id":	13,
        "nome":	"Getaway Powder",
        "artista": "DJ Freedem",
        "genero":	"Hip-Hop e rap",
        "clima":	"Inspirador",
        "imagem": "https://cdn.pixabay.com/photo/2019/12/14/07/21/mountain-4694346_960_720.png",
        "audio": "./audio/Getaway Powder - DJ Freedem.mp3"
        },
        {
        "id":	14,
        "nome":	"Life After Death",
        "artista": "DJ Freedem",
        "genero":	"Hip-Hop e rap",
        "clima":	"Alegre",
        "imagem": "https://cdn.pixabay.com/photo/2017/11/24/16/29/tea-2975184_1280.png",
        "audio": "./audio/Life After Death - DJ Freedem.mp3"
        },
        {
        "id":	15,
        "nome":	"Spring Thaw",
        "artista": "Asher Fulero",
        "genero":	"Ambiente",
        "clima":	"Animado",
        "imagem": "https://cdn.pixabay.com/photo/2020/10/09/08/15/dragonfly-5639879_1280.jpg",
        "audio": "./audio/Spring Thaw - Asher Fulero.mp3"
        }
    ]
}

var dbfake_musicas_favoritos = {
    "data": [
        // {
        // "id_usuario":	2,
        // "id_musica":	1,
        // },
        // {
        // "id_usuario":	2,
        // "id_musica":	2,
        // }   
    ]
}


// Caso exista no Local Storage, recupera os dados salvos
var musicas_cadastradas = JSON.parse(localStorage.getItem('musicas_cadastradas'));
var musicas_favoritos = JSON.parse(localStorage.getItem('musicas_favoritos'));

// var db_favoritos_doUsuario = buscarFavoritosPeloUsuario();

if (!musicas_cadastradas || musicas_cadastradas.data == '') {
    musicas_cadastradas = dbfake
    localStorage.setItem('musicas_cadastradas', JSON.stringify(musicas_cadastradas));
};

if (!musicas_favoritos || musicas_favoritos.data == '') {
    musicas_favoritos = dbfake_musicas_favoritos
    localStorage.setItem('musicas_favoritos', JSON.stringify(musicas_favoritos));
};

// console.log(musicas_cadastradas);
// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').css("display", "block");
    $('#msg').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">' + msg + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
}

function insertMusic(musicas) {

    let novoId;

	// Verificar se existe algum dado no LocalStorage
	if (musicas_cadastradas.data.length == 0) {
		novoId = 1;
	}
	else {
		// Calcula novo ID a partir do último ID existente
		novoId = musicas_cadastradas.data[musicas_cadastradas.data.length - 1].id + 1;
	}
    // Calcula novo Id a partir do último código existente no array
    // novoId = musicas_cadastradas.data[musicas_cadastradas.data.length - 1].id + 1;
    
    let novaMusica = {
        "id": novoId,
        "nome": musicas.nome,
        "artista": musicas.artista,
        "genero": musicas.genero,
        "clima": musicas.clima,
        "imagem": musicas.imagem,
        "audio": musicas.audio
    };

    console.log(novaMusica)

    // Insere o novo objeto no array
    musicas_cadastradas.data.push(novaMusica);
    // displayMessage("Música inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('musicas_cadastradas', JSON.stringify(musicas_cadastradas));
}

function updateMusic(id, musicas) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = musicas_cadastradas.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    	musicas_cadastradas.data[index].nome = musicas.nome,
        musicas_cadastradas.data[index].artista = musicas.artista,
        musicas_cadastradas.data[index].genero = musicas.genero,
        musicas_cadastradas.data[index].clima = musicas.clima,
        musicas_cadastradas.data[index].imagem = musicas.imagem,
        musicas_cadastradas.data[index].audio = musicas.audio

    if (changed) {
        musicas_cadastradas.data[index].imagem = musicas.imagem;
        changed = false;
    }

    // displayMessage("Música alterada com sucesso!");

    // Atualiza os dados no Local Storage
    localStorage.setItem('musicas_cadastradas', JSON.stringify(musicas_cadastradas));
}

function deleteMusic(id) {    
    // Filtra o array removendo o elemento com o id passado
    musicas_cadastradas.data = musicas_cadastradas.data.filter(function (element) { return element.id != id });

    displayMessage("Música removida com sucesso!");

    // Atualiza os dados no Local Storage
    localStorage.setItem('musicas_cadastradas', JSON.stringify(musicas_cadastradas));
}

function proxIdMusic(){
    let proxId;

	// Verificar se existe algum dado no LocalStorage
	if (musicas_cadastradas.data.length == 0) {
		proxId = 1;
	}
	else {
		// Calcula novo ID a partir do último ID existente
		proxId = musicas_cadastradas.data[musicas_cadastradas.data.length - 1].id + 1;
    }
    
    return proxId;
}

function buscarFavoritosPeloUsuario(){
    var favoritos = {
        "data": [   
        ]
    }
    
    usuario_logado = JSON.parse(localStorage.getItem('usuario_logado'));
    var musicas_favoritos = JSON.parse(localStorage.getItem('musicas_favoritos'));
    
    for (var i = 0; i < musicas_favoritos.data.length; i++){
        if (musicas_favoritos.data[i].id_usuario == usuario_logado.data[0].id)
        {
            let musica = buscarMusicaPorId(musicas_favoritos.data[i].id_musica);
            favoritos.data.push(musica);
        }
    }
    return favoritos;
}

function verificarFavoritoUsuario(id_musica){
    if(id_musica != null){
        usuario_logado = JSON.parse(localStorage.getItem('usuario_logado'));
        musicas_favoritos = JSON.parse(localStorage.getItem('musicas_favoritos'));

        if(usuario_logado != null){
            for (var i = 0; i < musicas_favoritos.data.length; i++){
                if (musicas_favoritos.data[i].id_usuario == usuario_logado.data[0].id && 
                    musicas_favoritos.data[i].id_musica == id_musica)
                {   
                    return true;
                }
            }
        }
    }

    return false;
}

function removerFatoritoPorUsuario(id_musica){
    if(id_musica != null){
        usuario_logado = JSON.parse(localStorage.getItem('usuario_logado'));
        musicas_favoritos = JSON.parse(localStorage.getItem('musicas_favoritos'));

        if(usuario_logado != null){
            for (var i = 0; i < musicas_favoritos.data.length; i++){
                if (musicas_favoritos.data[i].id_usuario == usuario_logado.data[0].id && 
                    musicas_favoritos.data[i].id_musica == id_musica)
                {   
                    musicas_favoritos.data.splice(i,1);//remove 1 itens a partir do índice 1,
                    localStorage.setItem('musicas_favoritos', JSON.stringify(musicas_favoritos));
                    console.log("musicas_favoritos", musicas_favoritos)
                    return true;
                }
            }
        }
    }

    return false;
}

function adicionarFatoritoPorUsuario(id_musica){
    if(id_musica != null){
        usuario_logado = JSON.parse(localStorage.getItem('usuario_logado'));
        musicas_favoritos = JSON.parse(localStorage.getItem('musicas_favoritos'));

        if(usuario_logado != null){
            let novoFavorito = {
                "id_usuario": usuario_logado.data[0].id,
                "id_musica": id_musica,
            };
        
            console.log(novoFavorito)
        
            // Insere o novo objeto no array
            musicas_favoritos.data.push(novoFavorito);
            // displayMessage("Música inserida com sucesso");
        
            // Atualiza os dados no Local Storage
            localStorage.setItem('musicas_favoritos', JSON.stringify(musicas_favoritos));

            return true;
        }
    }

    return false;
}

function buscarMusicaPorId(id){
    let index = musicas_cadastradas.data.map(obj => obj.id).indexOf(id);
    return musicas_cadastradas.data[index];
}

function getUsuarioLogado(){
    usuario_logado = JSON.parse(localStorage.getItem('usuario_logado'));
    if(!usuario_logado || usuario_logado.data == ''){
        return null;
    }else {
        return usuario_logado.data[0];
    }
}

function logoutAccount(){
    usuario_logado = JSON.parse(localStorage.getItem('usuario_logado'));
    
    localStorage.removeItem('usuario_logado');

    $(location).attr('href', './index.html');
}

function deleteUser(id) {    

    usuarios_cadastrados = JSON.parse(localStorage.getItem('usuarios_cadastrados'));

    if (usuarios_cadastrados == null){
        alert("Não foi possível excluir o usuário")
    } else {
        // Filtra o array removendo o elemento com o id passado
        usuarios_cadastrados.data = usuarios_cadastrados.data.filter(function (element) { return element.id != id });

        // Atualiza os dados no Local Storage
        localStorage.setItem('usuarios_cadastrados', JSON.stringify(usuarios_cadastrados));

        const demoClasses = document.querySelectorAll('.page-wrapper');
        demoClasses.forEach(element => {
            element.setAttribute('class', 'page-wrapper default-theme sidebar-bg bg1 toggled background-image-blur');
        });
        // console.log(demoClasses)
        // console.log(demoClasses[0])
        demoClasses[0];

        setTimeout(function(){
            // alert("Seu usuário foi removido do sistema! Redirecionando para a página de login...");

            $(location).attr('href', './index.html');
        }, 1500);
        
    }
}