function newGoogle(url) {
	var tagGoogle = window.open();
	tagGoogle.location.href = url;
}
function newFacebook(url) {
	var tagFacebook = window.open();
	tagFacebook.location.href = url;
}
function myFunction() {
    var form = document.createElement("P");
    document.body.appendChild(form);
    form.innerHTML = 'Form Đăng Ký';

    var form = document.createElement("P");
    document.body.appendChild(form);
    form.innerHTML = 'Username: <input type="text">';

    var form = document.createElement("P");
    document.body.appendChild(form);
    form.innerHTML = 'Password: <input type="password" style="margin-left:2px;">';

    var form = document.createElement("P");
    document.body.appendChild(form);
    form.innerHTML = 'Ho Ten: <input type="text" style="margin-left:15px;">';

    var form = document.createElement("P");
    document.body.appendChild(form);
    form.innerHTML = 'Email: <input type="text" style="margin-left:23px;">';

    var but = document.createElement("button");
    document.body.appendChild(but);
    but.innerHTML = 'Dang Ky';
    but.setAttribute('class','bnt');

    var dk = {
	    	action: function() {
			alert('Đăng Ký Thành Công');
		},
    }
    but.addEventListener('click',dk.action);

}
