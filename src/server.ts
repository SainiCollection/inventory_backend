import app from "./app";
import { PORT } from "./utils";
import { BASE_URL_SERVER } from "./utils";

app.listen(PORT,()=>{
    console.log(`Server running on this URL -> ${BASE_URL_SERVER}`)
})