import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})



const handlefetch = () => {


  let response = fetch("https://fakestoreapi.com/products").then((data) => {


  }).catch((err) => {
    console.log(err);
  });





  console.log(data)
}
