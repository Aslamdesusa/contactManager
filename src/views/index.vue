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
                <div>
                    <h3 class="mb-9">Start your 14 days free trial</h3>
                    <v-text-field label="Company Name" placeholder="Company Name" outlined dense></v-text-field>
                    <v-text-field label="Email" placeholder="Email" outlined dense></v-text-field>
                    <v-text-field label="Passwprd" placeholder="Password" outlined dense></v-text-field>
                    <p class="caption">Based on your IP, you are in India.Change <br>

                        Your data will be in US data center.</p>
                    <v-btn x-large color="red" block dark>Sign Up For Free</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-img src="https://zohowebstatic.com/sites/default/files/contactmanager-home-screen.png" aspect-ratio="2"></v-img>
    </v-container>
</v-container>
</template>
