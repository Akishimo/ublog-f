import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en'

for (let rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: en.messages[rule]
  })
}

extend('secret', {
  validate: value => value.length < 21 && value.length > 4,
  message: 'username length between 5 and 20 digits'
})

Vue.component('ValidationProvider', ValidationProvider)
