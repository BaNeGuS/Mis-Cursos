import express from "express";
import cors from "cors";

const app = express();

// Configuración básica: Permitir todos los orígenes
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


// Configuración avanzada: Permitir dominios específicos
const corsOptions = {
    // Dominios permitidos
    origin: ["https://example.com", "https://anotherdomain.com"],
    // Métodos HTTP permitidos
    methods: ["GET", "POST", "PUT", "DELETE"],
    // Encabezados permitidos
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Permitir cookies o credenciales
};

app.use(cors(corsOptions));



const port = 3000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
