<template>
  <div class="font-bold">
    Trading Overview
    <div class="grid grid-cols-1 flex text-white">
      <div class="grid grid-cols-9 gap-2 p-2 flex justify-between border-4 border-slate-800 font-title">
        <p>Trade #</p>
        <p>Trade Date</p>
        <p>Client</p>
        <p>Side</p>
        <p>Ticker</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Comission Type</p>
        <p>Comission</p>
      </div>
      <div v-for="trade in trades" class="grid grid-cols-9 gap-0 p-0 border-1 border-slate-600 flex justify-between font-normal">
        <NuxtLink :to="{ name: 'trades-id', params: { id: trade.id } }" class="bg-slate-900 border-2 border-slate-600">{{ trade.id }}</NuxtLink>
        <p class="border-2 border-slate-600"> {{ trade.date }}</p>
        <NuxtLink :to="{ name: 'clients-id', params: { id: trade.client } }" class="border-2 border-slate-600">{{ trade.client }}</NuxtLink>
        <p class="border-2 border-slate-600"> {{ trade.side }}</p>
        <p class="border-2 border-slate-600"> {{ trade.ticker }}</p>
        <p class="border-2 border-slate-600"> {{ trade.quantity }}</p>
        <p class="border-2 border-slate-600"> {{ trade.price }}</p>
        <p class="border-2 border-slate-600"> {{ trade.commission_type }}</p>
        <p class="border-2 border-slate-600"> {{ trade.commission }}</p>
      </div>
    </div>
  </div>
  <footer class="gap-2 p-2 flex justify-between">
    <UButton>Previous 1000 trades</UButton>
    <UButton>Next 1000 trades</UButton>
  </footer>
</template>

<script setup>
  const uri = '/api/getTrades/trades?limit='+ 1000 + '&offset=' + 0
  console.log(uri)
  const { data : temp } = await useFetch(uri)
  var trades = temp.value.items;

</script>

<style scoped>

</style>