import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import en from 'vee-validate/dist/locale/en'

for (let rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: en.messages[rule]
  })
}

extend('login-username', {
  validate: value => /^[0-9a-zA-Z]+$/.test(value),
  message: '{_field_} can only contain numbers and letters'
})

extend('login-password', {
  validate: value => /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[\da-zA-Z]+$/.test(value),
  message: '{_field_} contains and must contain uppercase and lowercase letters and numbers'
})

extend('register-repassword', {
  params: ['password'],
  validate: (value, { password }) => {
    return value === password
  },
  message: 'The {_field_} hahaha'
})
