const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const url = require('url')

const createWindow = () => {
  const window = new BrowserWindow({
    width: 640,
    height: 480,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true
  })

  window.loadURL(startUrl);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})