<template>
<v-container fluid style="background: #f3ddb7; height: 100%;">
    <v-row>
        <v-col cols="8">
            <v-card style="background: #f3ddb7;" height="50" flat>

            </v-card>
        </v-col>
        <v-col cols="4">
            <div>
            </div>
        </v-col>
    </v-row>
    <v-container>
        <v-row>

            <v-col cols="8">
                <h1 style="font-size: -webkit-xxx-large;">Contact management <br> software, refreshingly simple.</h1>
                <p>Zoho ContactManager is an online contact management software that lets you organize contacts, tasks, and deals in one place.</p>
            </v-col>
            <v-col cols="4">
                <div v-if="signup">
                    <h3 class="mb-9">Start your 14 days free trial</h3>
                    <v-text-field :disabled="this.$store.state.disabled" v-model="user.portalName" label="Company Name" placeholder="Company Name" outlined dense></v-text-field>
                    <v-text-field :disabled="this.$store.state.disabled" v-model="user.email" label="Email" placeholder="Email" outlined dense></v-text-field>
                    <v-text-field :disabled="this.$store.state.disabled" type="password" v-model="user.password" label="Passwprd" placeholder="Password" outlined dense></v-text-field>
                    <p class="caption">Based on your IP, you are in India.Change <br>

                        Your data will be in US data center. <a @click="loginToggle">Login</a></p>
                    <v-btn x-large color="red" block dark @click="save" :loading="this.$store.state.loading">Sign Up For Free</v-btn>
                </div>

                <div v-else>
                    <v-text-field :disabled="this.$store.state.disabled" v-model="user.email" label="Email" placeholder="Email" outlined dense></v-text-field>
                    <v-text-field :disabled="this.$store.state.disabled" type="password" v-model="user.password" label="Passwprd" placeholder="Password" outlined dense></v-text-field>
                    <p class="caption">Based on your IP, you are in India.Change <br>

                        Your data will be in US data center. <a @click="loginToggle">Signup</a></p>
                    <v-btn x-large color="red" block dark @click="login" :loading="this.$store.state.loading">Login</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="mt-10">
        <v-img src="https://zohowebstatic.com/sites/default/files/contactmanager-home-screen.png" aspect-ratio="2"></v-img>
    </v-container>
</v-container>
</template>

<script>
import http_users from '../../api-handler/http_users'
import http_portals from '../../api-handler/http_portal'
export default {
    data() {
        return {
            signup: true,
            user: {
                email: "",
                password: "",
                portalName: "",
            },
        }
    },
    created(){
        let query = this.$route.query
        if (query.queryPortal) {
            http_users.acceptInvitation(query.queryPortal, query.queryEmail).then(res=>{
                if (res) {
                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'success',
                        text: 'Your account was verified successfully. we have sent an email with your password please have a look'
                    });
                }
            })
        }
    },
    methods: {
        loginToggle() {
            this.signup ? this.signup = false : this.signup = true
        },
        async login() {
            this.$store.state.loading = true
            this.$store.state.disabled = true
            try {
                const userCredential = {
                    email: this.user.email,
                    password: this.user.password
                }
                await http_users.Login(userCredential).then(res => {
                    if (res) {
                        localStorage.setItem("user_token", JSON.stringify(res.data.token));
                        localStorage.setItem("user_Id", JSON.stringify(res.data.result._id));
                        var self = this;
                        setTimeout(function () {
                            http_portals.getPortalByUserId(res.data.result._id).then(doc => {
                                localStorage.setItem("portalSelected", JSON.stringify(doc.data.doc));
                                if (self.$route.query.redirect) {
                                    location.href = `#${self.$route.query.redirect}`
                                    location.reload()
                                } else {
                                    location.href = `#/contacts/${doc.data.doc.portalName}/deshboard`
                                    location.reload()
                                }
                                self.$store.state.loading = false
                                self.$store.state.disabled = false
                            })
                        }, 2000);
                    }
                })
            } catch (error) {
                let grabError = error.response
                if (error) {
                    this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'Error',
                        text: grabError.data.message
                    });
                    this.$store.state.disabled = false
                    this.$store.state.loading = false
                }
            }
        },
        async save() {
            this.$store.state.disabled = true
            this.$store.state.loading = true
            try {
                await http_users.insertPost(this.user).then(res => {
                    if (res) {
                        localStorage.setItem("user_token", JSON.stringify(res.data.token));
                        localStorage.setItem("user_Id", JSON.stringify(res.data.doc._id));
                        const self = this;
                        let portalObject = {
                            portalName: this.user.portalName,
                            portalUsers: [],
                            createdBy: {
                                userId: res.data.doc._id,
                                profile: 'administrator',
                                rols: 'CEO',
                                status: 'Active'
                            }
                        }
                        http_portals.insertPost(portalObject).then(result => {
                            if (result) {
                                localStorage.setItem("portalSelected", JSON.stringify(result.data.doc))
                                setTimeout(() => {
                                    location.href = `#/contacts/${result.data.doc.portalName}/deshboard`
                                    location.reload()
                                    self.$store.state.loading = false
                                    self.$store.state.disabled = false
                                }, 2000);
                            }
                        })
                    }
                })
            } catch (error) {
                let grabError = error.response
                if (error) {
                    this.$notify({
                        group: 'foo',
                        type: 'error',
                        title: 'Error',
                        text: grabError.data.message
                    });
                    this.$store.state.disabled = false
                    this.$store.state.loading = false
                }
            }
        }
    }
}
</script>
