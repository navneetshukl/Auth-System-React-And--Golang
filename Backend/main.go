package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/navneetshukl/database"
	"github.com/navneetshukl/routes"
)

func main() {
    app := fiber.New()
	database.ConnectToDatabase()

	routes.Setup(app)

    app.Listen(":8080")
}