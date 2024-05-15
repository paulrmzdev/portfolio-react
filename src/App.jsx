import './App.css';
import Avatar from './components/Avatar';
import Project from './components/Project';
import Condtdown from './components/Countdown';
import SocialMediaButton from './components/SocialMediaButton';

function App() {
  const DEADLINE=new Date('2024-06-01T00:01:00');
  const SPACE=40;
  return (
    <>
      <div className="profile" style={{display:"flex",alignItems:"center"}}>
        <div className="" style={{marginRight:15}}><Avatar imag="https://avatars.githubusercontent.com/u/89807520?v=4"/></div>
        <div className="profile-info" style={{textAlign:"start"}}> 
          <h1 style={{fontSize:25,marginBottom:0}}>Paul Ramírez</h1>
          <h2 style={{fontWeight:"normal",fontSize:18,marginTop:8}}>@paulrmz</h2>
          <div className="socialMedia" style={{display:"flex",justifyContent:"start"}}>
            <SocialMediaButton name="Github" target="https://github.com/paulrmzdev" icon="https://img.icons8.com/ios-filled/50/ffffff/github.png"/>
            <SocialMediaButton name="LinkedIn" target="https://www.linkedin.com/in/paulrmz" icon="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"/>
            <SocialMediaButton name="Spotify" target="https://open.spotify.com/playlist/6luQ67i1QhTIWSicxkr1f3?si=0e9e81559e804247" icon="https://img.icons8.com/ios-filled/50/ffffff/spotify.png"/>
            <SocialMediaButton name="Email" target="mailto:hola@paulrmz.com" icon="https://img.icons8.com/ios-filled/50/ffffff/circled-envelope.png"/>
            <SocialMediaButton name="CV" target="https://paulrmz.com/assets/CV-PaulRmz.pdf" icon="https://img.icons8.com/sf-black-filled/64/ffffff/downloading-updates.png"/>
          </div>
        </div>
      </div> 
      <p style={{textAlign:"left"}}>Soy consultor TI y desarrollador web en México. Egresado del Tecnológico Superior de Jalisco Campus El Grullo. He trabajado en diferentes proyectos tanto escolares como en el ámbito laboral.</p>
      <h2 style={{textAlign:"left",marginTop:SPACE}}>Tecnologías</h2>
      <div className="tecnologias" style={{display:"flex",justifyContent:"space-between",fontWeight:"bold"}}>
        <span>HTML</span>
        <span>JavaScript</span>
        <span>CSS</span>
        <span>React.js</span>
        <span>PHP</span>
        <span>MySQL</span>
      </div>
      <h2 style={{textAlign:"left",marginTop:SPACE}}>Proyectos</h2>
      <div className="proyectos" style={{display:"flex",flexWrap:"wrap"}}>
      <Project name="FinanzasApp" techs={["HTML","CSS","JS","Google Sheets"]} 
      description="Esta aplicación se creó con el fin de llevar un control de gastos e ingresos, análizando las transacciones por categorías y por tiempo, de una manera gráfica y amigable." 
      image="https://paulrmz.com/assets/img/dashboard-finanzas-min.png" 
      view="https://dashboard-finanzas.netlify.app/"
      code="https://github.com/paulrmzdev/dashboard-finanzas"/>

      <Project name="Catálogo de productos" techs={["ReactJS","WhatsAppApi","Google Sheets"]} 
      description="Esta aplicación se creó con el fin de brindar una forma simple de llevar el control de un stock de productos mostrándolos en forma de catálogo, brindando al cliente la opción de usar un botón para ordenar el producto por medio de WhatsApp." 
      image="https://paulrmz.com/assets/img/betterwarestore-min.png" 
      view="https://catalogobw.netlify.app/"
      code="https://github.com/paulrmzdev/betterware-store"/>

      <Project name="Porfolio v1.0" techs={["HTML","CSS","JS"]} 
      description="Diseño y desarrollo de la primera versión de mi porfolio web." 
      image="https://user-images.githubusercontent.com/89807520/194788623-2b755c6d-aa4e-4dad-8ace-bfa36403ec9b.png" 
      view="https://paulrmz.netlify.app/"
      code="https://github.com/paulrmzdev/portafolio"/>

      <Project name="Landing Social Page" techs={["ReactJS"]} 
      description="Diseño y desarrollo página de enlaces (landing social), para Autolavado." 
      image="https://private-user-images.githubusercontent.com/89807520/330175627-0f193a40-91ef-4253-989c-f99461af2958.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTU3ODYwNjAsIm5iZiI6MTcxNTc4NTc2MCwicGF0aCI6Ii84OTgwNzUyMC8zMzAxNzU2MjctMGYxOTNhNDAtOTFlZi00MjUzLTk4OWMtZjk5NDYxYWYyOTU4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTE1VDE1MDkyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEyZjUyMGZmNWY1MWNjNGIxYjViNzU5ODMyMGUxZDNmZDllZDZjOGUzZjE4YzFiMzk2ZjA3YjIxYTA1MDEyODgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.PMRQkiddI8Ek1dkKCNVgS4gNRYVDkTR6FMCAX_N7sY8" 
      view="https://morrisautolavado.com"
      code="https://github.com/paulrmzdev/morrisautolavado"/>

      <Project name="Essence Spa web" techs={["PHP","MySQL","HTML","CSS","JS"]} 
      description="Diseño y desarrollo de sitio web dinámico para un Spa." 
      image="https://paulrmz.com/assets/img/Inicio.png" 
      view="https://paulrmz.netlify.app/essencespa"
      code="https://github.com/paulrmzdev/essencespa-web"/>

      <Project name="CMS a Medida" techs={["PHP","MySQL","HTML","CSS","JS"]} 
      description="Sistema de gestión de contenidos para web a medida." 
      image="https://paulrmz.com/assets/img/cms.png" 
      view="https://paulrmz.netlify.app/cms"
      code="https://github.com/paulrmzdev/PHP-CMS"/>
      </div>
      <Condtdown deadline={DEADLINE} darkmode={true} bground={false} size={70} />
      <p style={{marginTop: 15}}>{"I will release this (hopefully, if I'm not busy) in"}</p>
      <img src="https://paulrmz.com/assets/img/Firma-min.png" alt="Logo" title='firma' width={100}/>
      <div className=""><span>© 2024 </span><a href="http://paulrmz.dev" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none",color:"var(--primary-color)"}}>Paulrmz</a>, All Right Reserved. </div> 
    </>
  )
}

export default App
