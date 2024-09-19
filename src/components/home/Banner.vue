<template>
  <section class="banner">
    <div id="carrosselBanner" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li
          data-target="#carrosselBanner"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carrosselBanner" data-slide-to="1"></li>
        <li data-target="#carrosselBanner" data-slide-to="2"></li>
        <li data-target="#carrosselBanner" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../../img/banner1.webp"
            class="d-block w-100"
            alt="Banner 1"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="../../../img/banner2.webp"
            class="d-block w-100"
            alt="Banner 2"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="../../../img/banner3.webp"
            class="d-block w-100"
            alt="Banner 3"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
            src="../../../img/banner4.webp"
            class="d-block w-100"
            alt="Banner 4"
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#carrosselBanner"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carrosselBanner"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Próximo</span>
      </a>
    </div>
  </section>
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
