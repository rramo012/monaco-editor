/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const path = require('path');
const helpers = require('monaco-plugin-helpers');

const REPO_ROOT = path.join(__dirname, '../../');

helpers.packageESM({
	repoRoot: REPO_ROOT,
	esmSource: 'monaco-typescript/out/esm',
	esmDestination: 'monaco-typescript/release/esm',
	entryPoints: ['monaco.contribution.js', 'tsMode.js', 'ts.worker.js'],
	resolveSkip: ['monaco-editor-core']
});
