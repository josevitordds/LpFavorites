import React from "react";
import "../styles/Profile.css"
import { FaHeart, FaStar, FaClock, FaCog, FaShieldAlt } from "react-icons/fa";
function Profile() {
    return (<>
        <div className="profilePage">
            <div className="profilePage-left bg-azulForte">
                <div className="profilePage-img">
                    <section className="profilePage-perfil bg-corSecundariaHeader"></section>
                    <h2>nick_name</h2>
                </div>
                <div className="profilePage-options ">
                    <section className="bt-1 hv space-bottom-10 flex items-center gap-2 cursor">
                        <FaHeart className="text-red-500" /> Filmes Favoritos
                    </section>
                    <section className="bt-2 hv space-bottom-10 flex items-center gap-2 cursor">
                        <FaStar className="text-yellow-400" /> Avaliações
                    </section>
                    <section className="bt-3 hv space-bottom-10 flex items-center gap-2 cursor">
                        <FaClock className="text-blue-400" /> Filmes Recentes
                    </section>
                    <section className="bt-4 hv space-bottom-10 flex items-center gap-2 cursor">
                        <FaCog className="text-gray-500" /> Configurações
                    </section>
                    <section className="bt-5 hv flex items-center gap-2 cursor">
                        <FaShieldAlt className="text-green-500" /> Termo de Privacidade
                    </section>
                </div>
            </div>
            <div className="profilePage-right bg-azulMedio">

            </div>
        </div>
    </>);
}

export default Profile;