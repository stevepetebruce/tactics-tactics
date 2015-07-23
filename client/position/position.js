Template.position.events ({

	// Edit Player name
	'click .icon-tasks':function(evt,tmpl){
		evt.stopPropagation();
		evt.preventDefault();
		Session.set('editing_tablename',this._id);
	},

	// Add skills
  	'click .skills':function(evt,tmpl){
      	evt.preventDefault();
      	evt.stopPropagation();
    	DBfields.insert({name:'Key Skills',tableid:this._id});
  },

	// Remove Player
	'click .close':function(evt,tmpl){
     	Positions.remove({_id:this._id});
  	},

  	// on return(13) save player name
	'keyup .tablename':function(evt,tmpl){
	    evt.stopPropagation();
	    evt.preventDefault();
	    if(evt.which === 13){
	      Positions.update(this._id,{$set:{name:tmpl.find('.tablename').value}});
	      Session.set('editing_tablename',null);
    }

    
  }
});

//drag modal and release to xy coordinates
Template.position.rendered = function () {
	$('.modal').draggable({
		handle:'.modal-header',
		stop:function(evt,ui){
			var left = ui.position.left;
			var top = ui.position.top;
			Positions.update($(this).attr('id'),{$set:{left:left + 'px', top:top + 'px'}});
		}
	})
} 

// 
Template.position.editing_tablename = function(){
	return Session.equals('editing_tablename',this._id)
};

Template.position.dbfields = function(){
  return DBfields.find({tableid:this._id});
}