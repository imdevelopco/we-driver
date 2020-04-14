<template>
    <div>
        <h1>We Drive </h1>
        <img class="img" :src="weDriveLogo" />
        
    </div>
</template>

<script>
export default{
    props: {
        weDriveLogo: {
        type: String,
        default: require("@/assets/img/weDrive.png")
        }
    }
}
</script>

<style></style>