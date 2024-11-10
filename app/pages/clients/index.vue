<template>
  <div class="font-bold">
    Clients Overview
    <div class="grid grid-cols-9 gap-2 p-2 flex justify-between border-4 border-slate-800 font-title">
        <p>Client #</p>
        <p>Client Name</p>
        <p>Company Type</p>
        <p>Location</p>
        <p>Contact Name</p>
        <p>Contact Title</p>
        <p>Total AUM</p>
        <p>Tier</p>
        <p>Risk Profile</p>
    </div>
    <div class="grid grid-cols-1 flex text-white font-title">
      <div v-for="cust in customers" class="grid grid-cols-9 flex justify-between font-normal">
        <NuxtLink :to="{ name: 'clients-id', params: { id: cust.id } }" class="bg-slate-900 border-2 border-slate-600">{{ cust.id }}</NuxtLink>
        <NuxtLink :to="{ name: 'clients-id', params: { id: cust.id } }" class="border-2 border-slate-600">{{ cust.company_name }}</NuxtLink>
        <p class="border-2 border-slate-600"> {{ cust.company_type }}</p>
        <p class="border-2 border-slate-600"> {{ cust.location }}</p>
        <p class="border-2 border-slate-600"> {{ cust.contact_name }}</p>
        <p class="border-2 border-slate-600"> {{ cust.contact_title }}</p>
        <p class="border-2 border-slate-600"> {{ cust.total_aum }}</p>
        <p class="border-2 border-slate-600"> {{ cust.tier }}</p>
        <p class="border-2 border-slate-600"> {{ cust.risk_profile }}</p>
      </div>
    </div>
  </div>
  <footer>
  </footer>
</template>

<script setup>
  const { data : temp } = await useFetch('/api/getClients')
  var customers = temp.value.items;

</script>

<style scoped>

</style>