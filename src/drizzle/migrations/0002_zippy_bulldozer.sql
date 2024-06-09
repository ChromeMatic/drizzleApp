CREATE TABLE IF NOT EXISTS "TodoGroup" (
	"Id" uuid PRIMARY KEY NOT NULL,
	"group_name" varchar NOT NULL,
	"description" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "credentials" varchar NOT NULL;