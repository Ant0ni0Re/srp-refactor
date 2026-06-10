interface User {
    id: number;
    name: string;
}

// Esta clase viola el Principio de Responsabilidad Unica (SRP)
class UserBloc {

    notifyUser() {
        // Simula el envio de notificaciones
        console.log('Enviando correo a los usuarios');
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

class SubscriptionBloc {

    onAddSubscription( subscriptionId: number ) {
        // Simula la gestion de suscripciones
        console.log('Agregando suscripcion:', subscriptionId );
    }

}

const userBloc = new UserBloc();
const userService = new UserService();
const subscriptionBloc = new SubscriptionBloc();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });
userBloc.notifyUser();
subscriptionBloc.onAddSubscription(1234);
