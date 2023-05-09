import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjdkYTA3OGE5ZjJjMzJkODJmOWFiNzY0NmVmYTQ3NSIsInN1YiI6IjY0NWE5NGYzNmFhOGUwMDEzOWJjM2JhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ztwjP_U3NAcpVQ1ILhZ5UQhY7nhDpz55NX5QpV0ziug"

export default axios.create ({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`,
    }
})