class AlumnoMultinacional {
    constructor(nombre, apellido_paterno, apellido_materno, calificacion, inscrito, nacionalidad) {
        this.nombre = nombre
        this.apellido_paterno = apellido_paterno
        this.apellido_materno = apellido_materno
        this.calificacion = calificacion
        this.inscrito = inscrito
        this.nacionalidad = nacionalidad

        this.dar_bienvenida()
        this.ObtenerInicialesDeAlumno()
        this.aprobado()
        this.agregarCalificacion()
    }

    esta_inscrito() {
        if (this.inscrito)
            return "El alumno está inscrito"
        else
            return "El alumno no está inscrito"
    }

    imprime_nombre_completo() {
        if (this.nacionalidad == "mexicano")
            return `${this.nombre} ${this.apellido_paterno} ${this.apellido_materno}`
        else
            return `${this.nombre} ${this.apellido_paterno}`
    }

    dar_bienvenida() {
        console.log(`Bienvenido ${this.imprime_nombre_completo()}`)
    }

    ObtenerInicialesDeAlumno() {
        console.log(`Hola ${this.nombre.charAt(0)}.${this.apellido_paterno.charAt(0)}.${this.apellido_materno.charAt(0)}`)
    }
    aprobado() {
        if (this.calificacion < 60) {
            console.log("Reprobado")
        } else {
            console.log("Aprobado")
        }
    }
    agregarCalificacion() {
        let calificaciones = [];
        let pregunta = prompt("¿Quieres agregar una nueva materia? (Y/N)")
        if (pregunta == "Y" || pregunta == "y") {
            while (pregunta == "Y") {
                calificaciones.push(prompt("¿Cuál será la materia?"))
                calificaciones.push(parseInt(prompt("¿Cuál es la calificación?")))
                console.log(calificaciones)
                pregunta = prompt("¿Quieres agregar una nueva materia? (Y/N)")
            }
            let acumulador = 0;
            for (let i = 1; i < calificaciones.length; i += 2) {
                acumulador = acumulador + calificaciones[i]
                console.log(acumulador)
            }
            let promedio = acumulador / (calificaciones.length / 2)
            console.log("este es tu promedio: " + promedio)
        } else { }



        /*let pregunta=prompt("¿Quieres agregar una nueva materia? (Y/N)")
        if (pregunta="Y") {
            for
        }*/
    }
}