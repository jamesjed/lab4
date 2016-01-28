exports.viewProject = function(req, res){
 //controller code goes here
 var name = req.params.name;
 console.log("This project's name is: " + name);
 res.render('project', {
 	'projectName': name
 });
};