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
        }   
    ]
}



// Caso exista no Local Storage, recupera os dados salvos
var db = JSON.parse(localStorage.getItem('musicas_cadastradas'));

if (!db || db.data == '') {
    db = dbfake
    localStorage.setItem('musicas_cadastradas', JSON.stringify(db));
};
console.log(db);
// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').css("display", "block");
    $('#msg').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">' + msg + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
}

function insertMusic(musicas) {

    let novoId;

	// Verificar se existe algum dado no LocalStorage
	if (db.data.length == 0) {
		novoId = 1;
	}
	else {
		// Calcula novo ID a partir do último ID existente
		novoId = db.data[db.data.length - 1].id + 1;
	}
    // Calcula novo Id a partir do último código existente no array
    // novoId = db.data[db.data.length - 1].id + 1;
    
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
    db.data.push(novaMusica);
    // displayMessage("Música inserida com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('musicas_cadastradas', JSON.stringify(db));
}

function updateMusic(id, musicas) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    	db.data[index].nome = musicas.nome,
        db.data[index].artista = musicas.artista,
        db.data[index].genero = musicas.genero,
        db.data[index].clima = musicas.clima,
        db.data[index].imagem = musicas.imagem,
        db.data[index].audio = musicas.audio

    if (changed) {
        db.data[index].imagem = musicas.imagem;
        changed = false;
    }

    // displayMessage("Música alterada com sucesso!");

    // Atualiza os dados no Local Storage
    localStorage.setItem('musicas_cadastradas', JSON.stringify(db));
}

function deleteMusic(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Música removida com sucesso!");

    // Atualiza os dados no Local Storage
    localStorage.setItem('musicas_cadastradas', JSON.stringify(db));
}

function proxIdMusic(){
    let proxId;

	// Verificar se existe algum dado no LocalStorage
	if (db.data.length == 0) {
		proxId = 1;
	}
	else {
		// Calcula novo ID a partir do último ID existente
		proxId = db.data[db.data.length - 1].id + 1;
    }
    
    return proxId;
}
