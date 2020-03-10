let $menuBox = $('.menuBox');
$menuBox.on('click',function(e){
	let target = e.target,
		 $target = $(target),
		 tarTag = target.tagName;
	if(tarTag === 'EM'){
		$target = $target.next();
		target = $target[0];
		tarTag = target.tagName;
	}
	if(tarTag === 'SPAN'){
		let $ul = $target.next('ul'),
			 $em = $target.prev('em');
		if($ul.length === 0) return;
		let promise = new Promise(resolve => {
			$ul.stop().slideToggle(200,function () {
				resolve();
			});
		});
		if($em.hasClass('plus')){
			$em.addClass('minus').removeClass('plus');
		}else{
			$em.addClass('plus').removeClass('minus');
			promise.then(()=>{
				$ul.find('em').removeClass('minus').addClass('plus');
				$ul.find('ul').css('display','none');
			})
		}
	}
});