<template>
    <div class="flex items-center justify-center h-screen bg-black">
        <div class="w-full max-w-xs">
        <h2 class="text-center text-yellow-400 uppercase text-4xl font-roboto-semibold mb-5">Create Account Sign In</h2>
        <form class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">
            <div class="mb-4">
            <label class="block text-gray-300 text-sm font-bold mb-2" for="username">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="username" type="text" placeholder="Username">
            </div>
            <div class="mb-4">
            <label class="block text-gray-300 text-sm font-bold mb-2" for="email">
                Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="email" type="email" placeholder="Email">
            </div>
            <div class="mb-6">
            <label class="block text-gray-300 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="password" type="password" placeholder="******************">
            </div>
            <div class="flex items-center justify-center">
            <button class="bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Register
            </button>
            </div>
        </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                const response = await axios.post('http://localhost:3000/register', {
                    username: this.username,
                    email: this.email,
                    password: this.password
                });
                console.log(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                this.$router.push('/profile');
            } catch (error) {
                console.error(error);
                window.alert('Registration failed. Please check your input and try again.');
            }
        }
    }
};
</script>
