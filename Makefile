up:
	docker compose up -d
build:
	docker compose build --no-cache --force-rm
nextjs-install:
	docker compose exec app npx create-react-app . --template typescript
create-project:
	mkdir -p project
	@make build
	@make up
	@make nextjs-install
stop:
	docker compose stop
down:
	docker compose down --remove-orphans
