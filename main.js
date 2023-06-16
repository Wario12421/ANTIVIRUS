const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Load the HTML file for your antivirus tool's user interface
  mainWindow.loadFile('index.html');

  // Open the DevTools (optional)
  // mainWindow.webContents.openDevTools();

  // Event: Emitted when the application window is closed
  mainWindow.on('closed', function() {
    // Dereference the window object
    mainWindow = null;
  });
}

// Event: Emitted when Electron has finished initializing
app.on('ready', createWindow);

// Event: Emitted when all application windows are closed
app.on('window-all-closed', function() {
  // On macOS, quit the app when all windows are closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Event: Emitted when the application is activated (macOS)
app.on('activate', function() {
  // Re-create the window if it's null (macOS specific behavior)
  if (mainWindow === null) {
    createWindow();
  }
});
