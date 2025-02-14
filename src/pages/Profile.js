import React from "react";
import "../styles/Profile.css"
function Profile(){
    return(<>
    <div className="profilePage">
        <div className="profilePage-left bg-azulMedio">
            <div className="profilePage-img">
                <section className="profilePage-perfil bg-corSecundariaHeader"></section>
                <h2>nick_name</h2>
            </div>
            <div className="profilePage-options ">
                <span className="space-bottom-10"> ⭐ Filmes Favoritos</span>
                <span className="space-bottom-10">⭐ Avaliações</span>
                <span className="space-bottom-10">⭐ Filmes Recentes</span>
                <span className="space-bottom-10">⭐ Configurações</span>
                <span>⭐ Termo de Privacidade</span>
            </div>
        </div>
        <div className="profilePage-right bg-corSecundariaHeader">

        </div>
    </div>
    </>);
}

export default Profile;