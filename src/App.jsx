import './Style.css';
import Frame1 from "./componets/Frame1";
import Frame2 from "./componets/Frame2";
import Frame3 from './componets/Frame3';
import Frame4 from './componets/Frame4';
import Frame5 from './componets/Frame5';
import Frame6 from './componets/Frame6';
import Frame7 from './componets/Frame7'; 


export const App = () => {
    return (
      <div className='AI'>
        <Frame1/>
        <Frame2/> 
        <div className='AI2'>
        <Frame3/>
        <Frame4/>
        <Frame5/>
        <Frame6/>
        <Frame7/> 
        </div>
      </div>
    );
};

export default App;
