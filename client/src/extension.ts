import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('nimlsp-rs.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from nimlsp-rs!');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() { }
