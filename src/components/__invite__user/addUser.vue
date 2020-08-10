<template>
<v-container fluid>
    <div class="pa-3">
        <v-row>
            <v-col>
                <span class="text-lg-h5 font-weight-light">User</span>
            </v-col>

            <v-spacer></v-spacer>

            <v-col>
                <v-row justify="end">
                    <v-dialog v-model="dialog" width="900px" persistent>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn rounded class="primary white--text" v-bind="attrs" v-on="on">Add User</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">Invite User(We'll send them an email with an invitation link)</span>
                            </v-card-title>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="4">
                                        <v-text-field v-model="invitationObject.userId" :disabled="this.$store.state.disabled" label="Email" placeholder="Email" outlined dense></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-select v-model="invitationObject.profile" :disabled="this.$store.state.disabled" :items="items" label="Profile" outlined dense></v-select>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-select v-model="invitationObject.rols" :disabled="this.$store.state.disabled" :items="roles" label="Select Role" outlined dense></v-select>
                                    </v-col>
                                </v-row>

                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">PROFILE</th>
                                                <th class="text-left">DATA ACCESS</th>
                                                <th class="text-left">MANAGE CUSTOM FIELDS</th>
                                                <th class="text-left">MANAGE WEB-TO-CONTACT FORM</th>
                                                <th class="text-left">MANAGE USERS & ROLES</th>
                                                <th class="text-left">MANAGE SUBSCRIPTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in desserts" :key="item.profile">
                                                <td>{{ item.profile }}</td>
                                                <td>{{ item.da }}</td>
                                                <td>{{ item.mcf }}</td>
                                                <td>{{ item.mwtcf }}</td>
                                                <td>{{ item.mur }}</td>
                                                <td>{{ item.ms }}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" text class="text-capitalize" rounded @click="inviteUser" :loading="this.$store.state.loading">
                                    Invite
                                </v-btn>
                                <v-btn color="primary" text class="text-capitalize" rounded @click="dialog = false" :disabled="this.$store.state.disabled">
                                    Cancle
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-col>
        </v-row>

        <v-divider></v-divider>
        <div v-if="portals">

            <div v-for="(item, index) in portalData" :key="index">
                <v-row>
                    <v-col cols="1">
                        <v-avatar v-if="item.email" color="red" size="70">
                            <v-gravatar :email="item.email" />
                        </v-avatar>
                        <v-avatar v-else>
                            <v-gravatar :email="item.userId" />
                        </v-avatar>
                    </v-col>
                    <v-col cols="6">
                        <div>
                            <span class="d-flex">
                                <span v-if="item.email">{{item.email.split('@')[0]}}</span>
                                <span v-else>{{item.userId.split('@')[0]}}</span>
                                <a class="mr-3 ml-2">Edit</a>

                            <v-dialog v-model="dialog1" width="500">
                                <template v-slot:activator="{ on, attrs }">
                                    <a v-bind="attrs" v-on="on">Delete</a>
                                </template>

                                <v-card>
                                    <v-card-title class="headline grey lighten-2">
                                        Are you sure?
                                    </v-card-title>

                                    <v-card-text class="mt-4 subtitle-1">
                                        Do you want to delete this user?
                                    </v-card-text>

                                    <v-divider></v-divider>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="red" text @click="removeUser(item, index)" :loading="loading">
                                            Okay, Go ahead
                                        </v-btn>
                                        <v-btn color="grey" text @click="dialog1 = false" :disabled="disabled">
                                            Cancle
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            </span>
                        </div>
                        <div v-if="item.email" class="body-2 grey--text">{{item.email}}</div>
                        <div v-else class="body-2 grey--text">{{item.userId}}</div>
                        <div class="body-2 grey--text">Profile : {{item.profile}}</div>
                        <div class="body-2 grey--text">Role : {{item.rols}}</div>
                        <div class="body-2 grey--text">Status : <span class="green--text">{{item.status}}</span></div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </div>

            <div v-if="data">
                <v-row>
                    <v-col cols="1">
                        <v-avatar color="red" size="70">
                            <v-gravatar :email="portals.createdBy.userId" />
                        </v-avatar>
                    </v-col>
                    <v-col cols="6">
                        <div v-if="data.createdBy.email">
                            {{ data.createdBy.email }}
                            <a href="http://" class="mr-3">Edit</a>
                        </div>
                        <div v-else>
                            {{ data.createdBy.userId }}
                            <a href="http://" class="mr-3">Edit</a>
                        </div>
                        <div v-if="data.createdBy.email" class="body-2 grey--text">{{data.createdBy.email}}</div>
                        <div v-else class="body-2 grey--text">{{data.createdBy.userId}}</div>
                        <div class="body-2 grey--text">Profile : {{data.createdBy.profile}}</div>
                        <div class="body-2 grey--text">Role : {{data.createdBy.rols}}</div>
                        <div class="body-2 grey--text">Status : <span class="green--text">{{data.createdBy.status}}</span></div>
                    </v-col>
                </v-row>
                <v-divider></v-divider>
            </div>
        </div>
    </div>
</v-container>
</template>

<script>
import {
    mapState
} from 'vuex'
import http_portal from '../../api-handler/http_portal'
import http_user from '../../api-handler/http_users'
export default {
    data() {
        return {
            data: null,
            portalData: null,
            loading: false,
            disabled: false,
            items: ['administrator', 'data_administator', 'standard'],
            roles: ['CEO', 'Manager'],
            dialog: false,
            dialog1: false,
            invitationObject: {
                userId: '',
                profile: '',
                rols: '',
                status: 'Active',
            },
            desserts: [{
                    profile: 'Administrator',
                    da: `Everyone's data`,
                    mcf: `✓`,
                    mwtcf: '✓',
                    mur: '✓',
                    ms: '✓'
                },
                {
                    profile: 'Data Administrator',
                    da: `Everyone's data`,
                    mcf: '✓',
                    mwtcf: '✓',
                    mur: '-',
                    ms: '-'
                },
                {
                    profile: 'Standard',
                    da: `Based on Role hierarchy`,
                    mcf: '-',
                    mwtcf: '-',
                    mur: '-',
                    ms: '-'
                },
            ],
        }
    },
    computed: {
        ...mapState([
            'portals',
        ])
    },
    watch: {
        deep: true,
        portals(val) {
            if (val) {
                this.getEmail()
                this.getItems()
            }
        }
    },
    created() {
        this.$store.dispatch('getPortalByUserId')
    },
    methods: {
        getItems() {
            this.portals.portalUsers.map((val, index) => {
                if (val.invitation !== 'pending') {
                    http_user.getUserById(val.userId).then(res => {
                        this.portalData = this.portals.portalUsers
                        this.portalData[index]["email"] = res.data.documents.email
                    })   
                }else{
                    this.portalData = this.portals.portalUsers
                }
            })
        },
        async getEmail() {
            await http_user.getUserById(this.portals.createdBy.userId).then(res => {
                if (res) {
                    this.data = this.portals
                    this.data.createdBy["email"] = res.data.documents.email
                }
            })
        },
        async removeUser(item, index) {
            this.loading = true
            this.disabled = true
            try {
                let takePortalId = this.portals
                let userData = {
                    userId: item.userId,
                    profile: item.profile,
                    rols: item.rols,
                    status: item.status,
                    invitation: item.invitation
                }
                await http_portal.removeUser(userData, takePortalId[0]._id).then(res => {
                    if (res) {
                        this.loading = false
                        this.disabled = false
                        this.dialog1 = false
                        this.portals.portalUsers.splice(index, 1)
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'success',
                            text: 'User has been successfully deleted'
                        });
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
                    this.loading = true
                    this.disabled = true
                }
            }
        },
        async inviteUser() {
            this.$store.state.disabled = true
            this.$store.state.loading = true
            try {
                let portalId = JSON.parse(localStorage.getItem('portalSelected'))
                await http_portal.inviteUser(this.invitationObject, portalId._id).then(res => {
                    if (res) {
                        localStorage.setItem('portalSelected', JSON.stringify(this.portals))
                        this.$store.state.disabled = false
                        this.$store.state.loading = false
                        this.dialog = false
                        this.$notify({
                            group: 'foo',
                            type: 'success',
                            title: 'success',
                            text: 'User invited successfully'
                        });
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
