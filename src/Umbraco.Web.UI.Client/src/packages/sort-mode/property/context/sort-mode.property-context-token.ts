import type { UmbSortModePropertyContext } from './sort-mode.property-context.js';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';

export const UMB_SORT_MODE_PROPERTY_CONTEXT = new UmbContextToken<UmbSortModePropertyContext>(
	'UmbPropertyContext',
	'UmbSortModePropertyContext',
);
