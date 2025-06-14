import { UMB_BLOCK_MANAGER_CONTEXT } from '../context/block-manager.context-token.js';
import type { BlockManagerHasCustomViewConditionConfig } from './types.js';
import { UmbConditionBase } from '@umbraco-cms/backoffice/extension-registry';
import type { UmbExtensionCondition, UmbConditionControllerArguments } from '@umbraco-cms/backoffice/extension-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';

export class UmbBlockManagerHasCustomViewCondition
	extends UmbConditionBase<BlockManagerHasCustomViewConditionConfig>
	implements UmbExtensionCondition
{
	constructor(
		host: UmbControllerHost,
		args: UmbConditionControllerArguments<BlockManagerHasCustomViewConditionConfig>,
	) {
		super(host, args);

		debugger;
		this.consumeContext(UMB_BLOCK_MANAGER_CONTEXT, (context) => {
			debugger;
			this.observe(
				context?.hasAnyCustomViews,
				(hasAnyCustomViews) => {
					debugger;
					this.permitted = !!hasAnyCustomViews;
				},
				'observeManagerHasCustomView',
			);
		});
	}
}

export default UmbBlockManagerHasCustomViewCondition;
