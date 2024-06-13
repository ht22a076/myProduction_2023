function toggleNav() {
	const body = document.body;
	const hamburger = document.getElementById("js_hamburger");
	const overlay = document.getElementById("js_overlay");
  
	// ハンバーガーメニューがクリックされた時の処理
	hamburger.addEventListener("click", function () {
	  body.classList.toggle("nav_open"); // body要素のクラスに"nav_open"を追加または削除する
	});
  
	// オーバーレイがクリックされた時の処理
	overlay.addEventListener("click", function () {
	  body.classList.remove("nav_open"); // body要素のクラスから"nav_open"を削除する
	});
  }
  
  toggleNav();