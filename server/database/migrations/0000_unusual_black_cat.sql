CREATE TABLE `companies` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`website` text,
	`organizationType` text,
	`industryType` text,
	`aboutUs` text,
	`location` text,
	`email` text,
	`phone` text,
	`urls` text,
	`created_at` integer NOT NULL,
	`updated_at` integer
);
--> statement-breakpoint
CREATE TABLE `jobs` (
	`id` text PRIMARY KEY NOT NULL,
	`company_id` text,
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
	`created_at` integer NOT NULL,
	FOREIGN KEY (`company_id`) REFERENCES `companies`(`id`) ON UPDATE no action ON DELETE no action
);
