<template>
  <v-app id="inspire" class="transparent">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="9" md="4">
            <v-card class="elevation-12">
              <v-toolbar dark flat class="grey darken-4 px-4">
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text class="black px-5">
                <v-form>
                  <input type="password" class="disable-autocomplate" name="password" />
                  <v-text-field color="cyan darken-3" label="Username" autocomplete="new-password" name="username" prepend-icon="person" type="text"></v-text-field>
                  <v-text-field color="cyan darken-3" id="password" label="Password" name="password" autocomplete="new-password" prepend-icon="lock" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="black pa-4">
                <div class="flex-grow-1"></div>
                <v-btn color="grey darken-4">Login</v-btn></v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>

<style lang="less">
@import './login.less';
</style>
