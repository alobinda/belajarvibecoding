import { Elysia } from "elysia";
// import { db } from "./db";
// import { users } from "./db/schema";

const app = new Elysia()
	.get("/", () => "Hello World from Elysia!")
	.get("/health", () => ({ status: "ok" }))
	// Contoh query database (pastikan MySQL sudah berjalan dan .env benar)
	// .get("/users", async () => {
	// 	return await db.select().from(users);
	// })
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
