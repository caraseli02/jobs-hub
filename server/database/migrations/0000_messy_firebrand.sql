CREATE TABLE `jobs` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`skills` text,
	`min_salary` integer,
	`max_salary` integer,
	`description` text,
	`education` text,
	`experience` text,
	`jobType` text,
	`country` text,
	`city` text,
	`status` text DEFAULT 'active',
	`applications` integer DEFAULT 0,
	`expirationDate` integer,
	`created_at` integer NOT NULL
);
