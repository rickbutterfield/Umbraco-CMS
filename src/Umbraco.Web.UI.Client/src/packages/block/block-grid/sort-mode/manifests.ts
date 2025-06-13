import { UMB_BLOCK_GRID_PROPERTY_EDITOR_UI_ALIAS } from '../property-editors/constants.js';
import type { UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';

const forPropertyEditorUis = [UMB_BLOCK_GRID_PROPERTY_EDITOR_UI_ALIAS];

export const manifests: Array<UmbExtensionManifest | UmbExtensionManifestKind> = [
	{
		type: 'propertyContext',
		kind: 'sortMode',
		alias: 'Umb.PropertyContext.BlockGrid.SortMode',
		name: 'Block Grid Sort Mode Property Context',
		forPropertyEditorUis,
	},
];
