/*
    author : @Farman Saleh
 	date   : August 27/2022
 	github : github.com/farmansaleh

	Note : Add .ValidateInput class in field which is mandatory field
**/
//Remove .ValidateInput class from all field
function removeValidateStyleClassOnResetForm(formId) {
	
	//Remove validateStyle Class From All Field if exist at reset time
	$('#'+formId+' input').removeClass("validateStyle");
	$('#'+formId+' select').removeClass("validateStyle");
	$('#'+formId+' textarea').removeClass("validateStyle");
}
// End :: For reset Form and remove validateStyle class

//Start :: Form validate means if any .ValidateInput class Field is empty before save then it will not save
function formValidate(formId) {
	var flag = true;
	
	//For All Input Field
	var textField=$('#'+formId+' input.ValidateInput');
	for(var i=0; i<textField.length; i++)
	{
		if($.trim(textField[i].value) == 'null' || $.trim(textField[i].value) == 'NaN' || $.trim(textField[i].value) == "")
		{
			$("#"+formId+" #"+textField[i].id).addClass("validateStyle");
			flag=false;
		}
	}
	
	//For Select Field
	var selectField=$('#'+formId+' select.ValidateInput');
	for(var i=0; i<selectField.length; i++)
	{
		if($.trim(selectField[i].value) == 'null' || $.trim(selectField[i].value) == 'NaN' || $.trim(selectField[i].value) == "")
		{
			$("#"+formId+" #"+selectField[i].id).addClass("validateStyle");
			flag=false;
		}
	}
	
	//For TextArea
	var textArea=$('#'+formId+' textarea.ValidateInput');
	for(var i=0; i<textArea.length; i++)
	{
		if($.trim(textArea[i].value) == 'null' || $.trim(textArea[i].value) == 'NaN' || $.trim(textArea[i].value) == "")
		{
			$("#"+formId+" #"+textArea[i].id).addClass("validateStyle");
			flag=false;
		}
	}
	return flag;
}
//End :: Form validate

//Start :: Remove ValidateStyle Class on focus of Form Validated
$('.ValidateInput').focus(function() {
	
	//First check that in this field validateStyle is exist or not
	if($(this).hasClass("validateStyle")) {
		
		//get form id and field id for remove class
		let formId = $(this).closest('form').attr("id");
		let fieldId = $(this)[0].id;
		
		//Remove validateStyle Class if exist
		$("#"+formId).find("#"+fieldId).removeClass("validateStyle");
	}
});
//End :: Remove ValidateStyle Class of Form Valiated