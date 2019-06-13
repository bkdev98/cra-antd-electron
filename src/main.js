const electron = require('electron');
const path = require('path');
const url = require('url');
const { Menu } = electron;
const { app } = electron;
const { BrowserWindow } = electron;

let mainWindow;

const LOAD_URL =
  process.env.DEV_URL ||
  url.format({
    pathname: path.join(__dirname, '/../build/index.html'),
    protocol: 'file:',
    slashes: true,
  });

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'Your App',
    backgroundColor: '#FB7EBB',
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      webSecurity: false,
    },
  });

  if (process.env.DEV_URL) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(LOAD_URL);

  const menu = Menu.buildFromTemplate([
    {
      label: 'Your App',
      submenu: [
        {
          label: 'Thoát ứng dụng',
          role: 'quit',
        },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
        { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
        { type: 'separator' },
        { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
        { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
        { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          selector: 'selectAll:',
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
