
// add player from nav
Template.navigation.events ({
	'click .addplayer': function (evt, tmpl) {
		evt.preventDefault();
		evt.stopPropagation();
		Positions.insert({name:'Player Name',left:(evt.pageX + 180) + 'px',top:(evt.pageY) + 'px'})
		Session.set('editing_table',id)
		
	}
});


Template.navigation.positions = function () {
	return Positions.find();
}