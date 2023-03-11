<template>
  <div class="background">
    <v-container class="fill-height text-center">
      <v-card class="mx-auto rounded-xl shadow" max-width="380">
        <v-img :height="height" src="@/assets/illustration-hero.svg" cover>
        </v-img>
        <div class="px-8">
          <v-card-title class="pt-8 pb-4 font-weight-bold text-darkblue"
            >Order Summary</v-card-title
          >

          <v-card-text class="text-desaturatedblue">
            <div>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </div>
          </v-card-text>

          <v-sheet
            class="d-flex justify-space-between align-center pa-4 mt-3 bg-verypaleblue rounded-lg"
          >
            <div class="d-flex formula">
              <div class="pr-5">
                <v-img width="45" src="@/assets/icon-music.svg"> </v-img>
              </div>
              <div>
                <div class="text-darkblue font-weight-bold formula_title">
                  Annual Plan
                </div>
                <div class="text-secondary formula_price">$59.99/year</div>
              </div>
            </div>
            <a role="button" class="text-primary font-weight-bold btn-change">
              Change
            </a>
          </v-sheet>

          <div class="fill-height pt-6 pb-8">
            <v-btn
              block
              rounded="lg"
              color="primary"
              class="mb-6 text-none font-weight-bold elevation-15 btn-payment"
            >
              Proceed to Payment
            </v-btn>
            <a role="button" class="text-secondary font-weight-bold btn-cancel">
              Cancel Order
            </a>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";

export default {
  setup() {
    const { name } = useDisplay();

    const height = computed(() => {
      // name is reactive and
      // must use .value
      switch (name.value) {
        case "xs":
          return 170;
        case "sm":
          return 190;
      }

      return undefined;
    });

    return { height };
  },
};
</script>

<style scoped>
.background {
  background-image: url("../assets/pattern-background-mobile.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100vh;
}
.v-card-title {
  font-size: 1.5rem;
}
.v-card-text {
  font-size: 1rem;
  line-height: 1.5rem !important;
  padding-left: 0;
  padding-right: 0;
}
.btn-change,
.btn-cancel .v-btn {
  font-size: 0.75rem;
}
.v-btn {
  padding: 1.563rem;
}
.formula .formula_title,
.formula .formula_price,
.btn-change {
  font-size: 0.875rem;
}
.btn-change {
  text-decoration: underline;
}
.btn-change:hover,
.btn-payment:hover {
  opacity: 0.8;
  text-decoration: none;
}
.shadow {
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
.btn-cancel:hover {
  color: #1f2f56 !important;
}

@media (min-width: 600px) {
  .background {
    background-image: url("../assets/pattern-background-desktop.svg");
  }
  .v-card-title {
    font-size: 1.5rem;
  }
  .v-card-text {
    font-size: 0.875rem;
    line-height: 10px;
  }
  .v-btn {
    padding: 1.25rem;
  }
  .v-btn,
  .btn-cancel,
  .btn-change {
    font-size: 0.75rem;
  }
}
</style>
