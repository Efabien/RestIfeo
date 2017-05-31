const rss=require('../modules/data/rss.js');

module.exports = function(req,res){	
	const topic = req.params.topic;
	const action = req.params.action;
		rss(topic,function(result){
			switch (action){
				case 'fresh' :
				res.send(result[0]);
				break;
				case 'next' :
				for(let i=0;i<result.length;i++){
					if(result[i].created===parseInt(req.query.ref)){
						res.send(result[i+1]);
					}else if(i===result.length-1){
						res.send({"message":"no more info"});
					}
				}	
				break;
				case 'getAll' :
				res.send(result);
				break;
				case 'random' :
				res.send(result[tool.random(0,result.length)]);
				break;			
			}
		})
};