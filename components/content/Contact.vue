<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-text-field
            v-model="name"
            :rules="[rules.required, rules.length]"
            :counter="10"
            label="Name"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-textarea
            v-model="message"
            :rules="[rules.required]"
            label="Write your message here..."
            required
            outlined
          ></v-textarea>
          <v-text-field
            v-model="botfield"
            label="人間は入力しないでください"
            v-show="false"
          />
          <v-btn color="success lighten-1" class="float-right" :outlined="!valid" :disabled="!valid" @click="onSubmit">
            <v-icon left small>mdi-send-outline</v-icon>Send message
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: false,
    name: '',
    email: '',
    message: '',
    botfield: '',
    rules: {
      required: (v) => !!v || '*This field is required',
      email: (v) => /.+@.+/.test(v) || '*E-mail must be valid',
      length: (v) =>
        v.length <= 10 || '*This field must be less than 10 characters',
    },
  }),
  methods: {
    onSubmit() {
      const params = new FormData()
      // NOTE: Netlify通知用ダミーフォーム static/dummy_contact_form_for_netlify.html と一致させる
      // NOTE: ref https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/
      params.append('form-name', 'contact')
      params.append('name', this.name)
      params.append('email', this.email)
      params.append('message', this.message)
      params.append('bot-field', this.botfield)

      // # NOTE: for debug
      console.log(...params.entries())

      axios.post('/', params)
        .then(() => {
          console.log('Success')
        }).catch(() => {
          console.log('Failure')
        })
    }
  }
}
</script>
