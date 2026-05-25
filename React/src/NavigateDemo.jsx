import {useNavigate} from "react-router-dom";

function NavigateDemo(){
    const navigate = useNavigate();

    function handleNavigate(){
        navigate('/services');
    }
    return<button onClick={handleNavigate}>Go to Services</button>
}
 
export default NavigateDemo;
//services => serviceDemo
//App.jsx
//    