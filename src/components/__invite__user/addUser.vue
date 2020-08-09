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

            <div v-for="(item, index) in portals[0].portalUsers" :key="index">
                <v-row>
                    <v-col cols="1">
                        <v-avatar color="red" size="70">
                            <v-gravatar :email="item.userId" />
                        </v-avatar>
                    </v-col>
                    <v-col cols="6">
                        <div>{{item.userId.split('@')[0]}}</div>
                        <div class="body-2 grey--text">{{item.userId}}</div>
                        <div class="body-2 grey--text">Profile : {{item.profile}}</div>
                        <div class="body-2 grey--text">Role : {{item.rols}}</div>
                        <div class="body-2 grey--text">Status : <span class="green--text">{{item.status}}</span></div>
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
export default {
    data() {
        return {
            items: ['administrator', 'data_administator', 'standard'],
            roles: ['CEO', 'Manager'],
            dialog: false,
            invitationObject: {
                userId: '',
                profile: '',
                rols: ''
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
    created() {
        this.$store.dispatch('getPortalByUserId')
    },
    methods: {
        async inviteUser() {
            this.$store.state.disabled = true
            this.$store.state.loading = true
            try {
                let portalId = localStorage.getItem('portalSelected')
                await http_portal.inviteUser(this.invitationObject, portalId._id).then(res => {
                    if (res) {
                        this.$store.dispatch('getPortalByUserId')
                        localStorage.setItem('portalSelected', JSON.stringify(this.portals[0]))
                        this.$store.state.disabled = true
                        this.$store.state.loading = true
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
