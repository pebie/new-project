NODE_MODULES_BIN=./node_modules/.bin/
GIT_SUBMODULE=$(shell grep path .gitmodules | sed 's/.*= //')
ROOT_DIR=$(shell pwd)

help: ## Prints help
	@cat $(MAKEFILE_LIST) | grep -e "^[a-zA-Z_\-]*: *.*## *" | awk 'BEGIN {FS = ":.*?## "}; {printf " > \033[36m%-20s\033[0m %s\n", $$1, $$2}'

dev: ## Run development environment
	@echo Runing application within development environement
	@DEPLOYMENT=development $(NODE_MODULES_BIN)/babel-node ./internal/development

start-mocks: ## Run mock server
		@echo Runing mocks server
		@node internal/mocks

install: ## Install dependencies
		@yarn install
