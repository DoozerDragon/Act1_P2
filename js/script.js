// Inicializar Vue
const app = Vue.createApp({
    data() {
        return {
            gustaProgramar: null,
            aniosProgramando: '',
            descripcionExperiencia: '',
            nuevoLenguaje: '',
            lenguajes: [],
            enviado: false,
            cargando: true,
            animacionEnviando: false, // Controla la animación de envío
            errores: {} // Objeto para almacenar errores de cada campo
        };
    },
    methods: {
        agregarLenguaje() {
            if (this.nuevoLenguaje && !this.lenguajes.includes(this.nuevoLenguaje)) {
                this.lenguajes.push(this.nuevoLenguaje);
                this.nuevoLenguaje = '';
            }
        },
        eliminarLenguaje(index) {
            this.lenguajes.splice(index, 1);
        },
        validarCampos() {
            // Limpiar errores previos
            this.errores = {};

            // Validar que cada campo esté lleno y agregar mensajes de error si es necesario
            if (!this.gustaProgramar) {
                this.errores.gustaProgramar = "Seleccione si le gusta programar.";
            }
            if (!this.aniosProgramando || this.aniosProgramando < 1) {
                this.errores.aniosProgramando = "Ingrese los años de experiencia.";
            }
            if (!this.descripcionExperiencia) {
                this.errores.descripcionExperiencia = "Describa su experiencia.";
            }
            if (this.lenguajes.length === 0) {
                this.errores.lenguajes = "Agregue al menos un lenguaje de programación.";
            }

            return Object.keys(this.errores).length === 0; // Retorna true si no hay errores
        },
        enviarEncuesta() {
            if (this.validarCampos()) {
                this.animacionEnviando = true;
                // Simula la duración de la animación (2 segundos)
                setTimeout(() => {
                    this.animacionEnviando = false;
                    this.enviado = true;
                }, 2000);
            } else {
                alert("Por favor, complete todos los campos obligatorios.");
            }
        }
    },
    mounted() {
        // Simular carga de la página
        setTimeout(() => {
            this.cargando = false;
        }, 2000); // 2 segundos de pantalla de carga
    }
});

app.mount('#app');
