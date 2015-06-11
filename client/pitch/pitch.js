Template.pitch.events ({
	'dblclick .pitch': function (evt, tmpl) {
		evt.preventDefault();
		evt.stopPropagation();
		if(evt.target.className === 'container-fluid pitch'){
			var id = Positions.insert({name:'Test',left:(evt.pageX + 280) + 'px',top:(evt.pageY) + 'px'})
			Session.set('editing_table',id)
		}
	}
});
Template.pitch.positions = function () {
	return Positions.find();
}