import { Reel } from './reel';
import '../Styles/home.css'
export const Home = () => {
  

  return (
    <div className="Home">
      
      <div className="ini">
        <img className="imgizq" src='src/Assets/ichigo.gif' alt="ichigo"></img>
        <div className="der">
          <h1>Quienes somos?</h1>
          <p>En AniModa, somos mas que una tienda de ropa. 
            Somos una comunidad apasionada por el arte, la cultura y la moda inspirada en el vibrante mundo de la animacion japonesa. 
            Nuestra mision es conectar a los fanaticos del anime con prendas unicas que reflejen su amor por sus personajes y series favoritas.</p>
        </div>
      </div>
      <div className="ini">
        <img className="imgder" src='src/Assets/gohan.gif' alt="gohandeidad"></img>
        <div className="izq">
          <h1>DiseNos Exclusivos</h1>
          <p>Colaboramos con artistas talentosos para crear prendas unicas que no encontraras en ningun otro lugar. 
            Cada diseno es una obra de arte que lleva el espiritu del anime directamente a tu guardarropa.</p>
        </div>
      </div>
      <div className="ini">
        <img className="imgizq" src='src/Assets/luffy4.gif' alt="luffy4"></img>
        <div className="der">
          <h1>Calidad y Confort</h1>
          <p>Nos aseguramos de que cada prenda no solo se vea increible, sino que tambien sea comoda y duradera. 
            Utilizamos materiales de alta calidad para que te sientas genial mientras representas a tus personajes favoritos.</p>
        </div>
      </div>
      <div className="ini">
        <div className="izq">
          <h1>Pasion por el Anime</h1>
          <p>Cada miembro de nuestro equipo es un verdadero fanatico del anime. 
            Esto nos permite entender mejor tus gustos y necesidades, y nos motiva a ofrecer productos que realmente amaras.</p>
        </div>
      </div>
      <div className="titulin">
        <h1>Nuestros Disenos</h1>
      </div>
      
      <Reel/>
    </div>
  );
};
