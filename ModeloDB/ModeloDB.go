package ModeloDB

import (
	"database/sql"
	//Se pone _ la libreria de driver tiene una funcion que no tiene que ver con el codigo de esta pagina
	//No esta siendo usada salvo que lo usas en el open
	//El compilador no se da cuenta que lo necesita por eso pones el _ para que el paquete se use en el momento que se
	//necesite por eso el "_" hace que no vaya en el fuente sino que
	_"github.com/go-sql-driver/mysql"
)

var db *sql.DB

func ObtenerClientesDB() (*sql.Rows, error) {

	return db.Query("select * from Cliente")

}


func Inicializar() {
	var gErr error
	db, gErr = sql.Open("mysql", "root:uno234@/alarmaSys")
	if(gErr != nil){
		panic(gErr.Error())
	}
}

func Close() {
	if db != nil {
		db.Close()
		db = nil
	}
}