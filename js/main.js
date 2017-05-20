function newGoogle(url) {
	var tagGoogle = window.open();
	tagGoogle.location.href = url;
}

function newFacebook(url) {
	var tagFacebook = window.open();
	tagFacebook.location.href = url;
}

function myFunction() {
	 var w = window.open();
	w.document.open();

	w.document.write('<h4>Form Đăng Ký</h4>');
	w.document.write('Username: <input type="text"></br></br>');
	w.document.write('Password: <input type="password" style="margin-left:2px;"></br></br>');
	w.document.write('Ho Ten: <input type="text" style="margin-left:15px;"></br></br>');
	w.document.write('Email: <input type="text" style="margin-left:23px;"></br></br>');
	w.document.write('<link rel="stylesheet" href="./css/style.css">')

	var but = document.createElement("button");
	but.id=('bnt');
    w.document.body.appendChild(but);
    but.innerHTML = 'Đăng Ký';
    
    var dk = {
	    	message: function() {
			alert('Đăng Ký Thành Công');
		},
    }
    but.addEventListener('click',dk.message);

	w.document.close();



}




	