
var postMsg = ''

function postText(value){
	console.log('iFrame sender: ' + value) 
	parent.postMessage(value, "*")
}



const scriptsInEvents = {

		async _win_score_Event8_Act6(runtime, localVars)
		{
			postText(runtime.globalVars.postMsg)
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

