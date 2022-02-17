.PHONY: install test artisan banner storybook serve serve-ui serve-core

install:
	@yarn
	@mjw hook --install
	@composer install -d packages/core
	@$(MAKE) banner

test:
	@mjw test

artisan:
	@php packages/core/artisan $(args)

banner:
	@echo '           _____ _____ _____         ______ '
	@echo '     /\   / ____|_   _|  __ \       |  ____|'
	@echo '    /  \ | |      | | | |  | |______| |__   '
	@echo '   / /\ \| |      | | | |  | |______|  __|  '
	@echo '  / ____ \ |____ _| |_| |__| |      | |____ '
	@echo ' /_/    \_\_____|_____|_____/       |______|'
	@echo

storybook:
	@npx nx run ui:storybook

serve-ui:
	@npx nx serve ui

serve-core:
	@$(MAKE) artisan args=serve

serve:
	@$(MAKE) serve-$(name)
