CREATE TABLE `companies` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`website` text,
	`organizationType` text,
	`industryType` text,
	`aboutUs` text,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
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
	`applications` integer,
	`expirationDate` integer,
	`created_at` integer NOT NULL
);
