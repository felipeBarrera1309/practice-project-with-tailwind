import { defineRule, configure } from "vee-validate";
import { localize } from '@vee-validate/i18n'
import es from '@vee-validate/i18n/dist/locale/es.json';
import * as AllRules from '@vee-validate/rules'

Object.entries(AllRules).forEach(([key, value]) => {
	defineRule(key, value);
});

localize({ es })

configure({
    generateMessage: localize('es')
})