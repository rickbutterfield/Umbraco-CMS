import type { BlockPropertyHasCustomViewsConditionConfig } from './types.js';
import { UmbConditionBase } from '@umbraco-cms/backoffice/extension-registry';
import type { UmbConditionControllerArguments, UmbExtensionCondition } from '@umbraco-cms/backoffice/extension-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { UMB_SORT_MODE_PROPERTY_CONTEXT } from '@umbraco-cms/backoffice/sort-mode';

export class UmbBlockPropertyHasCustomViewsCondition
	extends UmbConditionBase<BlockPropertyHasCustomViewsConditionConfig>
	implements UmbExtensionCondition
{
	constructor(host: UmbControllerHost, args: UmbConditionControllerArguments<BlockPropertyHasCustomViewsConditionConfig>) {
		super(host, args);

		this.consumeContext(UMB_SORT_MODE_PROPERTY_CONTEXT, (context) => {
			this.observe(
				context?.hasCustomViews,
				(hasCustomViews) => {
					if (hasCustomViews !== undefined) {
						this.permitted = hasCustomViews === true;
					}
				},
				'observeHasExpose',
			);
		});
	}
}

export default UmbBlockPropertyHasCustomViewsCondition;
