CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`completed` integer DEFAULT false
);
