import { UMB_SORT_MODE_CONTEXT } from './sort-mode.context-token.js';
import { UmbContextBase } from '@umbraco-cms/backoffice/class-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

/**
 * Sort mode context for managing sort mode state
 * @export
 * @class UmbSortModeContext
 * @augments {UmbContextBase}
 */
export class UmbSortModeContext extends UmbContextBase {
	constructor(host: UmbControllerHost) {
		super(host, UMB_SORT_MODE_CONTEXT);
	}
}

export { UmbSortModeContext as api };
