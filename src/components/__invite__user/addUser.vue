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
                    <v-dialog v-model="dialog" width="900px">
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
                                        <v-text-field :disabled="this.$store.state.disabled" label="Email" placeholder="Email" outlined dense></v-text-field>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-select :items="items" label="Profile" outlined dense></v-select>
                                    </v-col>
                                    <v-col cols="3">
                                        <v-select :items="roles" label="Select Role" outlined dense></v-select>
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
                                <v-btn color="primary" text class="text-capitalize" rounded @click="dialog = false">
                                    Invite
                                </v-btn>
                                <v-btn color="primary" text class="text-capitalize" rounded @click="dialog = false">
                                    Cancle
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row>
            <v-col cols="1">
                <v-avatar color="red" size="70">
                    <span class="white--text headline">CJ</span>
                </v-avatar>
            </v-col>
            <v-col cols="6">
                <div>Aslam Desusa</div>
                <div class="body-2 grey--text">aslam17@navgurukul.org</div>
                <div class="body-2 grey--text">Profile : Standard</div>
                <div class="body-2 grey--text">Role : Manager</div>
                <div class="body-2 grey--text">Status : <span class="green--text">Active</span></div>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
            <v-col cols="12">
                hello
            </v-col>
        </v-row>

    </div>
</v-container>
</template>

<script>
export default {
    data() {
        return {
            items: ['administrator', 'data_administator', 'standard'],
            roles: ['CEO', 'Manager'],
            dialog: false,
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
}
</script>
