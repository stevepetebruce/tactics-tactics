Template.dbfield.events ({
	'click .icon-lock': function (evt, tmpl) {
		evt.preventDefault();
      	evt.stopPropagation();
		Session.set('editing_field',this._id);
	},
	'keyup .efield':function(evt,tmpl){
		evt.preventDefault();
      	evt.stopPropagation();
      	var fieldname = tmpl.find('.efield').value;
      	if(fieldname && evt.which === 13){
      		DBfields.update(this._id,{$set:{name:fieldname}});
      		Session.set('editing_field',null);
      	}
	}
});
Template.dbfield.editing_field = function () {
	return Session.equals('editing_field',this._id);
}