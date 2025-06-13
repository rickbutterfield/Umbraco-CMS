export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'blockEditorCustomView',
		alias: 'Umb.blockEditorCustomView.TestView',
		name: 'Block Editor Custom View Test',
		element: () => import('./block-custom-view.js'),
		forContentTypeAlias: ['headlineUmbracoDemoBlock', 'heroBlock'],
		forBlockEditor: ['block-list', 'block-grid'],
	},
];
