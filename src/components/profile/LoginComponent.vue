<template>
    <div class="flex items-center justify-center h-screen bg-black">
        <div class="w-full max-w-xs">
        <h2 class="mt-10 text-center text-yellow-400 uppercase text-4xl font-roboto-semibold mb-10">Login</h2>
        <form class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
            <div class="mb-4">
            <label class="block text-gray-300 text-sm font-bold mb-2" for="username">
                Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="username" type="text" placeholder="Username">
            </div>
            <div class="mb-6">
            <label class="block text-gray-300 text-sm font-bold mb-2" for="password">
                Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="password" type="password" placeholder="******************">
            </div>
            <div class="flex items-center justify-center">
            <button class="bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Login
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
            password: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/login', {
                    username: this.username,
                    password: this.password
                });
                if (response.data.error) {
                    window.alert('Invalid username or password.');
                    return;
                }
                console.log(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                this.$router.push('/profile');
            } catch (error) {
                console.error(error);
                window.alert('Login failed. Please check your input and try again.');
            }
        }
    }
};
</script>

