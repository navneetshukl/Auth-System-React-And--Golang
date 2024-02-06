package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/navneetshukl/database"
	"github.com/navneetshukl/routes"
)

func init(){
	database.MigrateDatabase()
}

func main() {
    app := fiber.New()

	routes.Setup(app)

    app.Listen(":8080")
}