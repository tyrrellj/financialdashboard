<template>
    <div class="font-bold">
        Trade Details 
        <div class="grid grid-cols-1 flex text-white font-normal">
            <p> Trade #:           {{ trade.id }}                </p>
            <p> Trade Date:        {{ trade.date }}              </p>
            <p> Client:            {{ trade.client }}            </p>
            <p> Side:              {{ trade.side }}              </p>
            <p> Ticker:            {{ trade.ticker }}            </p>
            <p> Full Ticker:       {{ trade.full_ticker }}       </p>
            <p> Quantity:          {{ trade.quantity }}          </p>
            <p> Price:             {{ trade.price }}             </p>
            <p> Commission Type:   {{ trade.commission_type }}   </p>
            <p> Commission Amount: {{ trade.commission_amount }} </p>
            <p> Commission:        {{ trade.commission }}        </p>
        </div>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = '/api/getTrade/' + id
    console.log(uri)
    const { data : trade } = await useFetch(uri)
    console.log(trade)
</script>

<style scoped>

</style>