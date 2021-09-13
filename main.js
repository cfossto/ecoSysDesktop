const {app, BrowserWindow } = require('electron')

//const main_script = fs.readFile('/backend/EcoScode.js')
//const pdf_script = fs.readFile('/backend/pdfs.js')
//const backend_scripts = fs.readFile("backend.js")
//const main_css = fs.readFile('EcoSstyle.css')


function createWindow(){
    const win = new BrowserWindow({
        width:800,
        height:900
    })

    win.loadFile('index.html')
}


app.whenReady().then(() =>{
    createWindow()
    
    //app.on('window-all-closed', function () {  if (process.platform !== 'darwin') app.quit()})


})