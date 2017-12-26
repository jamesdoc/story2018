<template>
  <div class="eventdetail">
    <div class="eventdetail__roundal">
      <span class="eventdetail__roundal__date">{{ details.dtStart.format('D') }}</span>
      <span class="eventdetail__roundal__day">{{ details.dtStart.format('ddd') }}</span>
    </div>
    <div class="eventdetail__info">
      <div class="eventdetail__time">
        {{ details.dtStart.format('HH.mm') }} – {{ details.dtEnd.format('HH.mm') }}
      </div>

      <div class="eventdetail__title">
          {{ details.title }}
      </div>

      <div
        class="eventdetail__toggle"
        v-if="details.desc"
        @click="detailsOpen = !detailsOpen">
        Event details
      </div>

      <transition name="fade" mode="out-in">
        <div class="eventdetails__details" v-if="detailsOpen">
          <span v-html="details.desc"></span>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Eventdetail',
  props: {
    details: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      detailsOpen: false,
    };
  },
};
</script>

<style scoped>
  .eventdetail {
    display: flex;
    margin-bottom: 12px;
  }

  .eventdetail__roundal {
    background-color: #c6dee5;
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 12px;
    text-align: center;
    color: #c62127;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    text-transform: uppercase;
  }

  .eventdetail__info {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 10px;
  }

  .eventdetail__time {
    font-size: 12px;
  }

  .eventdetail__title {
    font-size: 16px;
  }

  .eventdetail__toggle {
    font-size: 12px;
    color: #c62127;
    text-decoration: underline;
  }

  .eventdetail__toggle:hover {
    text-decoration: none;
  }

  @media (min-width: 800px) {
    .eventdetail {
      width: 33%;
      padding: 30px;
    }

    .eventdetail__roundal {
      width: 150px;
      height: 150px;
      font-size: 32px;
    }

    .eventdetail__info {
      padding-top: 45px;
    }
  }
</style>
