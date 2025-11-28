//import des hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProfil } from "../services/api";

function ProfilePage() {
    //hook de navigation
    const navigate = useNavigate();
    //state de stockage
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    //chargé au chargement de la page
    useEffect(()=>{
        async function handleProfile() {
            //recuperer le token dans le localstorage
            const token = localStorage.getItem('token');
            if(!token){
                navigate('/login');
                return;
            }
            try {
                //on call l'api! function getProfile
                const data = await getProfil(token);
                console.log(data);    

            } catch (error) {
                
            }
        }

        //appel de ma function
        handleProfile();
    }, [navigate])
  
    if(loading){
        return(
            <div>
                en chargement
            </div>
        )
    }
    
    return(
        <div>
            <h2>profile page</h2>
            <div>roro@gmail.com toto</div>
        </div>
    )
}

export default ProfilePage;