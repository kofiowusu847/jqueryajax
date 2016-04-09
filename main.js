$(function(){
	
	var $orders = $("#orders");
	
	$.ajax({
		type: "GET",
		url:"api/orders.json",
		success: function(orders){
			$.each(orders,function(i,item){
				$orders.append('<li>name:'+item.name+',drink'+item.drink+'</li>');
			})
		}
	})
})