<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-text-field
            v-model="firstname"
            :rules="[rules.required, rules.length]"
            :counter="10"
            label="First name"
            required
            outlined
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            :rules="[rules.required, rules.length]"
            :counter="10"
            label="Last name"
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
          <v-textarea outlined label="Write your message here..." required :rules="[rules.required]"></v-textarea>
          <v-btn color="success lighten-1" class="float-right" :outlined="!valid" :disabled="!valid">
            <v-icon left small>mdi-send-outline</v-icon>Send message
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    email: '',
    rules: {
      required: (v) => !!v || '*This field is required',
      email: (v) => /.+@.+/.test(v) || '*E-mail must be valid',
      length: (v) =>
        v.length <= 10 || '*This field must be less than 10 characters',
    },
  }),
}
</script>