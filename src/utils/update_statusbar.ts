import * as vscode from 'vscode';

const updateStatusbar = (terminal: vscode.Terminal | undefined, buttons: vscode.StatusBarItem[]): void => {
  let showButtons: boolean = !!terminal;

  buttons.forEach((btn: vscode.StatusBarItem) => {
    if (showButtons) {
      btn.show();
    } else {
      btn.hide();
    }
  });
};

export default updateStatusbar;
