// eslint.config.js
import { defineConfig } from "eslint/config";

// todo: finalize rules
export default defineConfig([
	{
	  "root": true,
		"extends": "coderiety",
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
]);
