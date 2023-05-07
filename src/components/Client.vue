<template>
    <div class="client container text-center">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-3">
                <div class="logo">
                    <img src="@/assets/client1.svg" alt="" width="80%">
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <div class="logo">
                    <img src="@/assets/client2.svg" alt="" width="80%">
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <div class="logo">
                    <img src="@/assets/client3.svg" alt="" width="80%">
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-3">
                <div class="logo">
                    <img src="@/assets/client4.svg" alt="" width="80%">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Client',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.client {
    padding: 80px 0px;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {
    .logo {
        margin-bottom: 30px;
    }
}
</style>
  
