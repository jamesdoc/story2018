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
        <div class="eventdetail__details" v-if="detailsOpen">
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
    margin-bottom: 24px;
    margin-left: 6px;
  }

  .eventdetail__roundal {
    background-color: #c6dee5;
    border-radius: 50%;
    box-shadow: 0 0 0 2px white, 0 0 0 6px #c6dee5;
    color: #c62127;
    display: block;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    height: 75px;
    justify-content: center;
    margin-right: 12px;
    text-align: center;
    text-transform: uppercase;
    width: 75px;
  }

  .eventdetail__info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-top: 10px;
    text-align: left;
  }

  .eventdetail__time {
    font-size: 12px;
  }

  .eventdetail__title {
    font-size: 16px;
  }

  .eventdetail__toggle {
    color: #c62127;
    font-size: 12px;
    text-decoration: underline;
  }

  .eventdetail__toggle:hover {
    text-decoration: none;
  }

  @media (min-width: 800px) {
    .eventdetail {
      padding: 30px;
      width: 33%;
    }

    .eventdetail__roundal {
      font-size: 32px;
      height: 150px;
      width: 150px;
    }

    .eventdetail__info {
      margin-left: 12px;
      padding-top: 45px;
    }

    .eventdetail__title {
      font-size: 24px;
    }

    .eventdetail__details {
      margin-top: 10px;
    }
  }
</style>
