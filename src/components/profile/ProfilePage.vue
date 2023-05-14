<template>
    <div class="flex flex-col justify-center items-center bg-black">
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
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                Username
                </label>
                <p class="text-gray-300 text-lg font-bold">{{ username }}</p>
            </div>
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
                </label>
                <p class="text-gray-300 text-lg font-bold">{{ email }}</p>
            </div>
            <div class="mx-auto">
                <button class="bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="logout">
                Logout
                </button>
            </div> 
            </div>
        </div>
        </div>
        <h2 class="mt-5 text-yellow-400 uppercase text-2xl font-roboto-semibold mb-4">
            Favorite Movies
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4  w-10/12">
            <FavoriteItem 
            :key="movie.id" 
            v-for="movie in favoriteMovies" 
            :movie="movie" 
            :genres="genres"
            />
        </div>
    </div>
</template>

<script>
import FavoriteItem from '../items/FavoriteItem.vue'
export default {
    components: {
        FavoriteItem
    },
    data() {
        return {
        username: '',
        email: '',
        photo: null,
        favoriteMovies: [],
        };
    },
    async created() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.username = user.username;
            this.email = user.email;

            const favorites = JSON.parse(localStorage.getItem(`favorites_${user.id}`)) || [];
            for (let i = 0; i < favorites.length; i++) {
                const response = await this.$http.get(`/movie/${favorites[i]}`);
                this.favoriteMovies.push(response.data);
            }
        }
        this.photo = localStorage.getItem('photo');
    },
    methods: {
            uploadPhoto(event) {
            const file = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => {
                this.photo = e.target.result;
                localStorage.setItem('photo', this.photo);
            };
        },
        logout() {
            localStorage.removeItem('user');
            localStorage.removeItem('photo');
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
cursor: pointer;
}
</style>