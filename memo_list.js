/**
 * 
 */
//メモ一覧
//使用モジュール　jquery-2.1.1
//HTMLのIDやClickの動作は_が入っている。読み込み時の動作はつなげて書いてある
//作成者：松野弘法

//global
i = 0;

//表示の初期化
$(function (){
	//テーブルの初期化
	$('.memo_body').empty();
	//添字の初期化
	i = 0;
	//行の追加
	$('.memo_body').eq(-1).append("<tr><td width='10%'><input type='button' class='memo_editBtn' onclick='memo_edit("+i+")' value='編集' /><input type='button' class='memo_checkBtn' onclick='memo_check("+i+")' value='確認' /></td><td width='15%'><label class='memo_id'></label></td><td width='15%'><label class='memo_YMD'></label></td><td width='45%'><label class='memo_content'></label></td></tr>");
	//一覧表示
	memoListShow();
});

//一覧の表示
function memoListShow(){
	//localStorageのキー項目取得
	//for文にてlocalStorageのキーを取得し表示する
	for (i = 0; i < localStorage.length; i++){
		//localStorageのキー値を取得
		id = localStorage.key(i);
		
		//localStorageデータの取得
		data = JSON.parse(localStorage.getItem(id));
		
		//データの取得（年月日・内容）
		inputYMD = data['inputYMD'];
		inputContent = data['inputContent'];
		
		//データの投入
		if(id.match(/^[1-9][0-9]*$/)){
			$('.memo_body tr .memo_id').eq(-1).text(id);
			$('.memo_body tr .memo_YMD').eq(-1).text(inputYMD);
			$('.memo_body tr .memo_content').eq(-1).text(inputContent);
			
			//行の挿入
			$('.memo_body').eq(-1).append("<tr><td width='10%'><input type='button' class='memo_editBtn' onclick='memo_edit("+i+")' value='編集' /><input type='button' class='memo_checkBtn' onclick='memo_check("+i+")' value='確認' /></td><td width='15%'><label class='memo_id'></label></td><td width='15%'><label class='memo_YMD'></label></td><td width='45%'><label class='memo_content'></label></td></tr>");
		}
	}
}

//メモの編集へ
function memo_edit(i){
	//idの取得
	id = $('.memo_body tr .memo_id').eq(i).text();
	//localStorageにIDをセット
	localStorage.setItem('memo_id',id);
	//メモ編集に移動
	document.location = 'memo_edit.html';
}

//メモの確認へ
function memo_check(i){
	//idの取得
	id = $('.memo_body tr .memo_id').eq(i).text();
	//localStorageにIDをセット
	localStorage.setItem('memo_id',id);
	//メモ編集に移動
	document.location = 'memo_read.html';
}