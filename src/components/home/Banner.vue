<template>
    <section class="banner">
        <div id="carrosselBanner" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li
                    v-for="(campaign, index) in campaigns"
                    :key="campaign.id"
                    data-target="#carrosselBanner"
                    :data-slide-to="index"
                    :class="{ active: index === 0 }"
                ></li>
            </ol>
            <div class="carousel-inner">
                <div
                    v-for="(campaign, index) in campaigns"
                    :key="campaign.id"
                    class="carousel-item"
                    :class="{ active: index === 0 }"
                >
                    <img
                        :src="campaign.imageUrl"
                        class="d-block w-100"
                        :alt="campaign.name"
                    />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ campaign.name }}</h5>
                    </div>
                </div>
            </div>

            <a
                class="carousel-control-prev"
                href="#carrosselBanner"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carrosselBanner"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        campaigns: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style>
.banner-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #dddd;
    height: 400px;
}
</style>
