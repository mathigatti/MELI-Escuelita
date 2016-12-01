package ModeloClientes

import (
	"10_GinDB/ModeloDB"
)

type Cliente struct {
	Id int "ID"
	Nombre string "Nombre"
	Apellido string "Apellido"
	Categoria string "Categoria"
	FechaNacimiento string "Fecha de nacimiento"
}

func IniciarServicios() {

	ModeloDB.Inicializar()

}

func TerminarServicios() {

	ModeloDB.Close()

}

func ObtenerClientes() []Cliente {
	clientes := []Cliente{}

	rows, err := ModeloDB.ObtenerClientesDB()

	if err != nil {
		panic(err.Error())
	}

	var cliente Cliente
	for rows.Next() {	//mientras que haya siguiente
		// get RawBytes from data
		err := rows.Scan(&cliente.Id, &cliente.Nombre,&cliente.Apellido,&cliente.Categoria,&cliente.FechaNacimiento)
		clientes = append(clientes,cliente)
		if err != nil {
			panic(err.Error()) // proper error handling instead of panic in your app
		}
	}
	return clientes
}