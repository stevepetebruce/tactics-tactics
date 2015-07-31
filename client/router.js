Router.configure({
	layoutTemplate:'layout'
});


Router.map(function(){
	this.route('home',{path:['/','/soccer','/football']});
	this.route('basketball',{path:'/basketball'});
	this.route('afootball',{path:'/afootball'});
	this.route('baseball',{path:'/baseball'});
	this.route('icehockey',{path:'/icehockey'});
	this.route('rugby',{path:'/rugby'});
})