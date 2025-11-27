import { useState } from "react";
import { register } from "../services/api";

function RegisterForm() {
    //etat pour stocker les valeur du form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //etat pour stocker les messages d'erreur
    const [message, setMessage] = useState('');
    //etat pour savoir si on est en train d'envoyer une requeste
    const [loading, setLoading] = useState(false);

    //la function utilisé quand on soumet le formulaire
    async function handleSubmit(event) {
        //empeche le rechargement de la page quand on soumet le form
        event.preventDefault();
        //Je change le status du state loading
        setLoading(true);

        alert('jesuisentrain de soumettre mon form');
    }

    return (
        <div>
            <h2>Inscription</h2>

            {/*formulaire avec la logique de submit*/}
            <form onSubmit={handleSubmit}>

                <button type="submit">
                    {loading ? 'Chargement' : 'sinscrire'}
                </button>
            </form>
        </div>
    )
}

export default RegisterForm;