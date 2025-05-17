lint:
	npx eslint . --ext .js,.jsx,.ts,.tsx --fix
	npx stylelint "**/*.{css,scss}" --fix
	npx prettier --write . 