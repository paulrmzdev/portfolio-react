import './App.css';
import Condtdown from './components/Countdown';
import SocialMediaButton from './components/SocialMediaButton';

function App() {
  const DEADLINE=new Date('2024-06-01T00:01:00');
  return (
    <>
      <img src="./underConstruction.png" alt="underConstruction" width={400}/>
      <h1 style={{marginTop: 0,marginBottom: 0}}>Coming Soon</h1>
      <p style={{marginTop: 15}}>{"I will release this (hopefully, if I'm not busy) in"}</p>
      <Condtdown deadline={DEADLINE} darkmode={true} bground={false} size={70} />
      <div className="socialMedia">
        <SocialMediaButton name="Github" target="https://github.com/paulrmzdev" icon="https://img.icons8.com/ios-filled/50/github.png"/>
        <SocialMediaButton name="LinkedIn" target="https://www.linkedin.com/in/paul-ram%C3%ADrez-23615b133/" icon="https://img.icons8.com/ios-filled/50/linkedin.png"/>
        <SocialMediaButton name="Email" target="mailto:hola@paulrmz.com" icon="https://img.icons8.com/ios-filled/50/circled-envelope.png"/>
      </div>
      <img src="https://paulrmz.com/assets/img/Firma-min.png" alt="Logo" width={100}/>
    </>
  )
}

export default App
