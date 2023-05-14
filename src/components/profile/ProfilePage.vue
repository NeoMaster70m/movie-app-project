<template>
    <div class="flex items-center justify-center min-h-screen bg-black">
        <div class="w-full max-w-xl p-4">
            <h2 class="text-center text-yellow-400 uppercase text-4xl font-bold mb-10">Profile</h2>
            <div class="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
                <div v-if="!photo" class="w-64 h-64 relative cursor-pointer bg-purple-200 rounded mb-4">
                    <input type="file" class="w-full h-full opacity-0 cursor-pointer absolute left-0 top-0" @change="uploadPhoto">
                    <div class="flex items-center justify-center w-full h-full">
                        <i class="fas fa-cloud-upload-alt text-6xl text-purple-700"></i>
                    </div>
                </div>
                <img v-else :src="photo" class="w-64 h-64 object-cover rounded mb-4" />
                <div class="flex flex-col w-full mb-4 space-y-4">
                    <div>
                        <label class="block text-gray-300 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <p class="text-gray-700">{{ username }}</p>
                    </div>
                    <div>
                        <label class="block text-gray-300 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <p class="text-gray-700">{{ email }}</p>
                    </div>
                    <button class="bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="logout">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: 'User',
            email: 'user@example.com',
            photo: null,
        };
    },
    methods: {
        uploadPhoto(event) {
            const file = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => {
                this.photo = e.target.result;
            };
        },
        logout() {
            // Remove token from localStorage
            localStorage.removeItem('authToken');
            // Redirect user to login page
            this.$router.push('/login');
        }
    },
};
</script>

<style scoped>
.inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
}
.inputfile + label {
    font-size: 1.25em;
    font-weight: 700;
    color: white;
    background-color: black;
    display: inline-block;
}
.inputfile:focus + label,
.inputfile + label:hover {
    background-color: red;
}
.inputfile + label {
    cursor: pointer; /* "hand" cursor */
}
</style>
