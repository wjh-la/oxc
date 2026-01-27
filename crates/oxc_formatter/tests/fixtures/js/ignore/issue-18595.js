// prettier-ignore on class property should not add extra semicolon
export class Counter {
	// prettier-ignore
	'count' = $state(0);
	constructor() {
		this['count'] = $state(0);
	}
}
