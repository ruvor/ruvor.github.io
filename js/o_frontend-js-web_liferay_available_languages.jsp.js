










AUI.add(
	'portal-available-languages',
	function(A) {
		var available = {};

		var direction = {};

		

			available['ru_RU'] = 'Russian (Russia)';
			direction['ru_RU'] = 'ltr';

		

			available['en_US'] = 'English (United States)';
			direction['en_US'] = 'ltr';

		

		Liferay.Language.available = available;
		Liferay.Language.direction = direction;
	},
	'',
	{
		requires: ['liferay-language']
	}
);