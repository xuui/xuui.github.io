var orderinfo=[];
var $_GET=(function(){var url=window.document.location.href.toString(),u=url.split("?");if(typeof(u[1])=="string"){u=u[1].split("&");var get={};for(var i in u){var j=u[i].split("=");get[j[0]]=j[1];}return get;}else{return{};}})();
(function(wbo){wbo(function(){
	
	var icarCode=sessionStorage.getItem('icarCode');
	if(icarCode!=null){
		wbo('#inCarNum').val(icarCode);
		sessionStorage.removeItem("icarCode")
	}
	var openID=$_GET['openid'];
	console.info($_GET['openid']);
	
  wbo('#carNums').html('');
  wbo('#inCarNum').keyup(function(){var value=wbo(this).val();wbo('.carNums').text(value);}).keyup();
  
})})(jQuery);

