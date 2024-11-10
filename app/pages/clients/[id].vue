<template>
    <div class="font-bold pb-8">
        Client Details for: {{ customer.company_name }}
        <div class="grid grid-cols-2 flex text-white font-normal">
            <p>Customer ID:      {{ customer.id }}               </p>
            <p class="font-bold">Contact Details                 </p>
            <p>Company Type:     {{ customer.company_type }}     </p>
            <p>Contact Name:     {{ customer.contact_name }}     </p>
            <p>Year Established: {{ customer.year_established }} </p>
            <p>Contact Title:    {{ customer.contact_title }}    </p>
            <p>Total Aum:       ${{ customer.total_aum }}        </p>
            <p>Contact Email:    {{ customer.contact_email }}    </p>
            <p>Tier:             {{ customer.tier }}             </p>
            <p>Contact Phone #:  {{ customer.contact_phone }}    </p>
            <p>Risk Profile:     {{ customer.risk_profile }}     </p>
            <p>Location:         {{ customer.location }}         </p>
        </div>
    </div>
    <div class="font-bold">
    Trading Overview
        <div class="grid grid-cols-1 flex text-white">
          <div class="grid grid-cols-9 gap-2 p-2 flex justify-between border-4 border-slate-800
           font-title">
            <p>Client</p>
            <p>Trade Date</p>
            <p>Trade #</p>
            <p>Side</p>
            <p>Ticker</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Comission Type</p>
            <p>Comission</p>
          </div>
          <div v-for="trade in trades" class="grid grid-cols-9 gap-0 p-0 border-1 border-slate-600 flex justify-between font-normal">
            <NuxtLink :to="{ name: 'clients-id', params: { id: trade.client } }" class="bg-slate-900  border-2 border-slate-600">{{ trade.client }} </NuxtLink>
            <p class="border-2 border-slate-600"> {{ trade.date }}</p>
            <NuxtLink :to="{ name: 'trades-id', params: { id: trade.id } }" class="border-2 border-slate-600">{{ trade.id }}                        </NuxtLink>
            <p class="border-2 border-slate-600"> {{ trade.side }}</p>
            <p class="border-2 border-slate-600"> {{ trade.ticker }}</p>
            <p class="border-2 border-slate-600"> {{ trade.quantity }}</p>
            <p class="border-2 border-slate-600"> {{ trade.price }}</p>
            <p class="border-2 border-slate-600"> {{ trade.commission_type }}</p>
            <p class="border-2 border-slate-600"> {{ trade.commission }}</p>
          </div>
        </div>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = '/api/getClient/' + id
    const { data : customer } = await useFetch(uri)
    const uri2 = '/api/getClient/' + id + '/trades'
    const { data : trades } = await useFetch(uri2)
</script>

<style scoped>

</style>