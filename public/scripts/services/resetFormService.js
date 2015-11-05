angular.module('invoiceFrontEndApp')
.service('formResetService', function () {
	return {
		resetForm: resetForm
	};

	function resetForm() {
		var activeFormElements = $('.active'),
			validFormElements = $('.valid');
		
		activeFormElements.removeClass('active');
		validFormElements.removeClass('valid');		
	}
});