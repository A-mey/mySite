import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faEnvelope, faMapMarkerAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import './left.scss'
import '../../styles/main.scss'
import profile from  './profile.jpg'

const Left = () => {

    type iconFont = {
        key: string
        value: string
        icon: IconDefinition
    }

    let items: iconFont[] = [{
        key: 'mobile number',
        value: '+91 98921 98417',
        icon: faMobile
    },{
        key: 'email',
        value: 'amey2p@gmail.com',
        icon: faEnvelope
    },{
        key: 'address',
        value: 'Navi Mumbai',
        icon: faMapMarkerAlt
    }];
    
    return (
        <div className="left">
            <img className='left-profile' src={profile} />
            <ul className='left-list'>
                {items.map((item, index) => (
                    <li key={index}>
                        <p>
                            <span className ='left-list__icon'><FontAwesomeIcon icon={item.icon} /></span>
                            <span className='left-list__key'>{item.key}</span>
                        </p>
                        <p className='left-list__value'>{item.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Left