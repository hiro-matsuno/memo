/**
 * 
 */
//メモチェック
//使用モジュール　jquery-2.1.1
//HTMLのIDやClickの動作は_が入っている。読み込み時の動作はつなげて書いてある
//作成者：松野弘法

//初期化
$(function(){
	//読み込み先のIDをlocalStorageより取得
	id = localStorage.getItem('memo_id');
	//データをlocalStorageから読み込む
	data = JSON.parse(localStorage.getItem(id));
	//データの読み込み
	editDate = data['inputYMD'];
	editContent = data['inputContent'];
	//データの挿入
	$('#update_date').text(editDate);
	$('#update_id').val(id);
	$('#update_content').val(editContent);
});

//データの更新
function update_content(){
	//データの取得
	updateId = $('#update_id').val();
	updateDate = $('#update_date').text();
	updateContent = $('#update_content').val();
	//データの整形
	data = {'inputYMD':updateDate,'inputContent':updateContent};
	//データのlocalStorageへの登録
	localStorage.setItem(updateId,JSON.stringify(data));
	//cookieへの登録
	$.cookie.json = true;
	$.cookie(updateId, data, {expires:7});
}

//データの戻し
function update_reverse(){
	//読み込み先のIDをlocalStorageより取得
	id = localStorage.getItem('memo_id');
	//データをlocalStorageから読み込む
	data = JSON.parse(localStorage.getItem(id));
	//データの読み込み
	editDate = data['inputYMD'];
	editContent = data['inputContent'];
	//データの挿入
	$('#update_date').text(editDate);
	$('#update_id').val(id);
	$('#update_content').val(editContent);	
}

//編集完了
function update_close(){
	//localStorageからIDの削除
	localStorage.removeItem('memo_id');
	//一覧ページへの移動
	document.location = 'memo_list.html';
}