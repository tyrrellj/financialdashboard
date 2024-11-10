<template>
    <div>
        <header class ="shadow-sm bg-slate-800">
            <nav class="container mx-auto p-4 flex justify-between">
                <ul class="flex gap-8">
                    <li class="font-bold">Tyrrell Capital</li>
                    <li><NuxtLink to="/"> Home</NuxtLink></li>
                    <li><NuxtLink to="/clients"> Clients</NuxtLink></li>
                    <li><NuxtLink to="/trades"> Trades</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>