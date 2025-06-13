import type { UmbSortModeContext } from './sort-mode.context.js';
import { UmbContextToken } from '@umbraco-cms/backoffice/context-api';

export const UMB_SORT_MODE_CONTEXT = new UmbContextToken<UmbSortModeContext>('UmbSortModeContext');
