/*
 * hello, world
 * IP�Ȃǐݒ�Fhttp://testcording.com/?p=1164
 */
/*
 * �p�����[�^
 */
var IP_ADDRESS = "localhost";
var PORT       = 1337;

/*
 * ���W���[���ǂݍ���
 */
var http = require("http");

/*
 * �T�[�o�̍쐬
 */
http.createServer(function (req, res) {
	// ���N�G�X�g���ꂽURL�����O�ɕ\��(�u���E�U����A�N�Z�X����邽�тɃR���\�[���֏o�͂���)
	console.log(req.url);
	// �w�b�_�[�̑��M ���M����f�[�^�̃^�C�v��text/plain
	res.writeHead(200, {"Content-Type": "text/plain"});
	// ���g�̕�����𑗐M
	res.end("hello, world! : URL " + req.url);
}).listen(PORT, IP_ADDRESS, function () {
	/*
	 * �T�[�o�N�����ɕ\�����郍�O(�N���������Ƃ�������₷��)
	 */
	console.log("Server running at http://" + IP_ADDRESS + ":" + PORT + "/");
	console.log("�T�[�o���I������ۂ�[ctrl + c]�������Ă�������");
});
