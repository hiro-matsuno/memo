/**
 * 
 */
//メモ入力
//使用モジュール　jquery-2.1.1/jquery-cookie
//HTMLのIDやClickの動作は_が入っている。読み込み時の動作はつなげて書いてある
//作成者：松野弘法

//global
i = 0;

//HTMLの初期化
$(function(){
	//日付及び時間の取得
	inputYMD = thisYMDGet();
	inputYMDHM = thisYMDHMGet();
	//データの初期化および初期データ入力
	$('#insert_YMD').text(inputYMD);
	$('#insert_YMDHM').val(inputYMDHM);
	$('#insert_content').val('');
});

//現在日付の取得
function thisYMDGet(){
	//現在の日付を取得
	thisDate = new Date();
	//年月日の取得
	thisYear = thisDate.getFullYear();
	thisMonth = thisDate.getMonth() + 1;
	thisDay = thisDate.getDate();
	//フォーマットの生成
	thisYMD = thisYear + '年' + thisMonth + '月' + thisDay + '日';
	//値のもどす
	return thisYMD;
}

//現在日付と時刻を取得
function thisYMDHMGet(){
	//現在日付の取得
	thisDate = new Date();
	//年月日の取得
	//年の取得
	thisYear = thisDate.getFullYear();
	//月の取得
	thisMonth = thisDate.getMonth() + 1;
	//1〜9は頭に0をつける
	if(thisMonth >= '1' && thisMonth <= '9'){
		thisMonth = '0' + thisMonth;
	}
	//日の取得
	thisDay = thisDate.getDate();
	//1〜9は頭に0を入れる
	if(thisDay >= '1' && thisDay <= '9'){
		thisDay = '0' + thisDay;
	}
	
	//時刻の取得
	thisHM = new Date();
	//時間の取得
	thisHour = thisHM.getHours();
	//0〜9は頭に0を入れる
	if(thisHour >= '0' && thisHour <= '9'){
		thisHour = '0' + thisHour;
	}
	//分の取得
	thisMinute = thisHM.getMinutes();
	//0〜9は頭に0を入れる
	if(thisMinute >= '0' && thisMinute <= '9'){
		thisMinute = '0' + thisMinute;
	}
	
	//フォーマットの成形
	thisYMDHM = thisYear + thisMonth + thisDay + thisHour + thisMinute;
	
	//戻り値を返す
	return thisYMDHM;
}

//データのクリア
function content_clear(){
	//日付及び時間の取得
	inputYMD = thisYMDGet();
	inputYMDHM = thisYMDHMGet();
	//データの初期化および初期データ入力
	$('#insert_YMD').text(inputYMD);
	$('#insert_YMDHM').val(inputYMDHM);
	$('#insert_content').val('');
}

//データの登録
function content_insert(){
	//データの取得
	inputYMD = $('#insert_YMD').text();
	ID = $('#insert_YMDHM').val();
	inputContent = $('#insert_content').val();
	
	//登録データの生成
	data = {'inputYMD':inputYMD,'inputContent':inputContent};
	
	//localStorageに登録
	localStorage.setItem(ID,JSON.stringify(data));
	
	//cookieへの登録
	$.cookie.json = true;
	$.cookie(ID, data, {expires:7});
}