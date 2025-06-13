import { UMB_SORT_MODE_CONTEXT } from './sort-mode.context-token.js';
import { UmbContextBase } from '@umbraco-cms/backoffice/class-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UmbBooleanState } from '@umbraco-cms/backoffice/observable-api';

/**
 * Sort mode context for managing sort mode state
 * @export
 * @class UmbSortModeContext
 * @augments {UmbContextBase}
 */
export class UmbSortModeContext extends UmbContextBase {

	#sortMode = new UmbBooleanState(false);
	readonly sortMode = this.#sortMode.asObservable();

	setSortMode(sortMode: boolean | undefined) {
		this.#sortMode.setValue(sortMode ?? false);
	}
	getSortMode(): boolean | undefined {
		return this.#sortMode.getValue();
	}

	constructor(host: UmbControllerHost) {
		super(host, UMB_SORT_MODE_CONTEXT);
	}
}

export { UmbSortModeContext as api };
