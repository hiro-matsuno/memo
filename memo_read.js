/**
 * 
 */
//メモチェック
//使用モジュール　jquery-2.1.1
//HTMLのIDやClickの動作は_が入っている。読み込み時の動作はつなげて書いてある
//作成者：松野弘法

$(function(){
	//読み込み先のIDをlocalStorageより取得
	id = localStorage.getItem('memo_id');
	//データをlocalStorageから読み込む
	data = JSON.parse(localStorage.getItem(id));
	//データの読み込み
	readDate = data['inputYMD'];
	readContent = data['inputContent'];
	//データの表示
	$('#read_id').val(id);
	$('#read_date').text(readDate);
	$('#read_content').val(readContent);
	
});

//編集画面への移動
function read_edit(){
	document.location = 'memo_edit.html';
}

//チェックの完了
function read_close(){
	localStorage.removeItem('memo_id');
	document.location = 'memo_list.html';
}