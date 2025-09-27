//dependencias
import express from "express";
import fetch from "node-fetch"; // si usas Node 18+, ya viene global
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // lee el .env con tu API KEY

const app = express();
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor Express funcionando 🚀");
});

app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
        console.warn("Mensaje inválido recibido:", message);
        return res.status(400).json({ error: "Mensaje inválido" });
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo", // podés probar con "gpt-3.5-turbo" si hay problemas
            messages: [{ role: "user", content: message }]
        })
        });
        console.log("Status de OpenAI:", response.status);
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error en respuesta de OpenAI:", errorText);
            return res.status(500).json({ error: "Error al consultar OpenAI" });
        }

        const data = await response.json();
        console.log("Respuesta de OpenAI:", data);

        if (!data.choices || !data.choices[0]) {
        return res.status(500).json({ error: "Respuesta inválida de OpenAI" });
        }

        res.json({ reply: data.choices[0].message.content });
    } catch (err) {
        console.error("Error en el servidor:", err);
        res.status(500).json({ error: "Error en el servidor" });
    }
});


app.listen(5000, () => console.log("Servidor en http://localhost:5000"));
