/*
Erik Evans, Design Patterns
Erich Gamma, 
Nat Pryce y Steve Freeman, Growing object oriented software

*/


package main

import (
	"gopkg.in/gin-gonic/gin.v1"
	//Se pone _ la libreria de driver tiene una funcion que no tiene que ver con el codigo de esta pagina
	//No esta siendo usada salvo que lo usas en el open
	//El compilador no se da cuenta que lo necesita por eso pones el _ para que el paquete se use en el momento que se
	//necesite por eso el "_" hace que no vaya en el fuente sino que
	_"github.com/go-sql-driver/mysql"
	//"ModeloDB"
	"10_GinDB/ModeloClientes"
)

func jsonGet(c *gin.Context) {
	clientes := ModeloClientes.ObtenerClientes()
	c.JSON(200, clientes)
}

func jsonPost(c *gin.Context) {
	nick := c.Query("nick")
	message := c.Query("message")

	c.JSON(200, gin.H{
		"message": message,
		"nick":    nick,
	})
}

func main (){

	defer ModeloClientes.TerminarServicios()
	ModeloClientes.IniciarServicios()
	// Creates a gin router with default middleware:
	// logger and recovery (crash-free) middleware
	router := gin.Default()

	router.GET("/json", jsonGet)

	router.POST("/json", jsonPost)

	// By default it serves on :8080 unless a
	// PORT environment variable was defined.
	router.Run(":8080")

	// router.Run(":3000") for a hard coded port

}
