interface User {
    id: number;
    name: string;
}

class UserBloc {

    constructor(
        private userService: UserService,
        private mailer: Mailer,
    ) {}

    loadUser( id: number ) {
        this.userService.loadUser(id);
    }

    saveUser( user: User ) {
        this.userService.saveUser(user);
    }

    notifyUser() {
        this.mailer.sendEmail();
    }

}

class UserService {

    loadUser( id: number ) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user );
    }

}

class Mailer {

    sendEmail() {
        // Simula el envio de correos
        console.log('Enviando correo a los usuarios');
    }

}

class SubscriptionBloc {

    onAddSubscription( subscriptionId: number ) {
        // Simula la gestion de suscripciones
        console.log('Agregando suscripcion:', subscriptionId );
    }

}

const userService = new UserService();
const mailer = new Mailer();
const userBloc = new UserBloc(userService, mailer);
const subscriptionBloc = new SubscriptionBloc();

userBloc.loadUser(10);
userBloc.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
subscriptionBloc.onAddSubscription(1234);
