const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    title: 'Daily Bytes',
    width: 700,
    height: 500,
    //autoHideMenuBar: true,
    backgroundColor: '#f7f2f2'
  });

  win.loadFile('dist/daily-bytes/index.html');
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});