<template>
    <div class="container-fluid banner">
        <div
            id="carouselExampleIndicators"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
        >
            <div class="carousel-inner">
                <div
                    class="carousel-item active"
                    v-for="campaign in campaigns"
                    :key="campaign.id"
                >
                    <!-- <img
                        :src="campaign.image"
                        class="d-block w-100"
                        :alt="campaign.title"
                    /> -->
                    <p class="banner-item">{{ campaign.title }}</p>
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        campaigns: Array,
    },
};
</script>

<style>
.banner-item {
    display: flex;
    justify-content: center;
    align-items: center;
    widows: 100%;
    background-color: #dddd;
    height: 400px;
}
</style>
