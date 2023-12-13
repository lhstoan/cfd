const REGEXP = {
	email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
	phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};

const validate = (rules, form) => {
	let errorObject = {};
	for (const ruleKey in rules) {
		for (const rule of rules[ruleKey]) {
			if (rule.required) {
				if (!!!form[ruleKey]) {
					errorObject[ruleKey] = rule.message || "Vui lòng nhập";
					break;
				}
			}
			if (rule.regrex && form[ruleKey]) {
				let pattern = "";
				if (rule.regrex in REGEXP) {
					pattern = REGEXP[rule.regrex];
				} else if (rule.regrex instanceof RegExp) {
					pattern = rule.regrex;
				} else {
					pattern = new RegExp(rule.regrex, "gi");
				}
				if (!pattern.test(form[ruleKey])) {
					errorObject[ruleKey] = rule.message || "Vui lòng nhập đúng định dạng";
					break;
				}
			}
		}
	}
	return errorObject;
}

export const requireRule = (message) => {
	return {
		required: true,
		message,
	};
};

export const regrexRule = (regrex, message) => {
	return {
		regrex,
		message,
	};
};

export default validate