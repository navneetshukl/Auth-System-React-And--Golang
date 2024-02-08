package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/navneetshukl/database"
	"github.com/navneetshukl/routes"
)

func init() {
	database.MigrateDatabase()
}

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
		AllowOrigins:     "http://localhost:5173",
	}))

	routes.Setup(app)

	app.Listen(":8080")
}
