import { UMB_BLOCK_LIST_PROPERTY_EDITOR_UI_ALIAS } from '../property-editors/constants.js';
import type { UmbExtensionManifestKind } from '@umbraco-cms/backoffice/extension-registry';

const forPropertyEditorUis = [UMB_BLOCK_LIST_PROPERTY_EDITOR_UI_ALIAS];

export const manifests: Array<UmbExtensionManifest | UmbExtensionManifestKind> = [
	{
		type: 'propertyContext',
		kind: 'sortMode',
		alias: 'Umb.PropertyContext.BlockList.SortMode',
		name: 'Block List Sort Mode Property Context',
		forPropertyEditorUis,
	},
	{
		type: 'propertyAction',
		kind: 'toggleSortMode',
		alias: 'Umb.PropertyAction.BlockList.SortMode.Toggle',
		name: 'Block List Toggle Sort Mode Property Action',
		forPropertyEditorUis,
		conditions: [
			{
				alias: 'Umb.Condition.BlockPropertyHasCustomViews',
			},
		],
	},
];
