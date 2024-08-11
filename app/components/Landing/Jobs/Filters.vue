<script setup lang="ts">
import {
  Search,
} from 'lucide-vue-next'
</script>

<template>
  <Card class="flex rounded-lg px-1 py-2 w-[calc(100vw-4rem)] md:w-full flex-wrap">
    <div class="relative flex items-center flex-1 md:grow-0">
      <Search class="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        class="w-full border-none rounded-lg bg-slate-200 dark:bg-slate-900 ml-1 pl-8 min-w-[250px] lg:w-[250px]"
      />
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          class="gap-1 my-auto ml-2 h-11"
        >
          <span class=" sm:whitespace-nowrap">
            Job Status
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem checked>
          Published
        </DropdownMenuItem>
        <DropdownMenuItem>Draft</DropdownMenuItem>
        <DropdownMenuItem>
          Unpublished
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          class="gap-1 my-auto ml-2 h-11"
        >
          <span class=" sm:whitespace-nowrap">
            Applications Total
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem checked>
          Less than 5
        </DropdownMenuItem>
        <DropdownMenuItem>
          5 to 10
        </DropdownMenuItem>
        <DropdownMenuItem>
          10 to 15
        </DropdownMenuItem>
        <DropdownMenuItem>
          15 to 20
        </DropdownMenuItem>
        <DropdownMenuItem>
          20 to 50
        </DropdownMenuItem>
        <DropdownMenuItem>
          50+
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          class="gap-1 my-auto ml-2 h-11"
        >
          <span class="">Location</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div class="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <label
              for="terms2"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              New York, NY
            </label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div class="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <label
              for="terms2"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              San Francisco, CA
            </label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div class="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <label
              for="terms2"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remote
            </label>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button
          variant="ghost"
          class="gap-1 my-auto ml-2 h-11"
        >
          <span class="">Type</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div class="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <label
              for="terms2"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remote
            </label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div class="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <label
              for="terms2"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Hybrid
            </label>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div class="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <label
              for="terms2"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              On Site
            </label>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </Card>
</template>

<style scoped>

</style>
