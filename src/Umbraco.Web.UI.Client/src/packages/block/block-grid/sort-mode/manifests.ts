import { UMB_BLOCK_GRID_PROPERTY_EDITOR_UI_ALIAS } from '../property-editors/constants.js';
import { UMB_PROPERTY_HAS_VALUE_CONDITION_ALIAS } from '@umbraco-cms/backoffice/property';
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
	{
		type: 'propertyAction',
		kind: 'toggleSortMode',
		alias: 'Umb.PropertyAction.BlockGrid.SortMode.Toggle',
		name: 'Block Grid Toggle Sort Mode Property Action',
		forPropertyEditorUis,
		conditions: [
			{
				alias: UMB_PROPERTY_HAS_VALUE_CONDITION_ALIAS,
			},
			{
				alias: 'Umb.Condition.BlockManagerHasCustomView',
			},
		],
	},
];
