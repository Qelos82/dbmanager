const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
	win = new BrowserWindow({width:800, height:800, icon: __dirname+'/db.png'});
	
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}));
	
	win.on('closed', () =>{
		win=null;
	});
}

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
	if(process.platform !=='win32'){
		app.quit();
	}
});