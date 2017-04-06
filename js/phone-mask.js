angular.module("ListaTelefonica").directive("uiTelefone", function(){
	return {
		require: "ngModel",
		link : function(scope, element, attrs, ctrl){

			var _formatTel = function (phone){
				if (phone) {
					phone = phone.replace(/[^0-9]+/g, "");

					if (phone.length > 1) {
						phone = "("+phone.substring(0,2) +")"+ phone.substring(2);
					}
					if (phone.length > 8) {
						phone = phone.substring(0,8) +"-"+ phone.substring(8,13);
					}
				}
				return phone;

			}

			element.bind("keyup", function(){
				ctrl.$setViewValue(_formatTel(ctrl.$viewValue));
				ctrl.$render();
			});

			ctrl.$parsers.push(function(value){
				if (value.length === 14) {
					return value.substring(4);
				}
			})
		}
	}
})