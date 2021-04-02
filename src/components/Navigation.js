import {NavLink} from 'react-router-dom';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TimelineIcon from '@material-ui/icons/Timeline';
import SettingsIcon from '@material-ui/icons/Settings';
import logo from '../assets/stock-icon.png';
import logo2 from '../assets/wallet-icon.png';

const Navigation = () => {
    return ( 
        <div className="navigation">
                <div className="logo-background">
                    <img src={logo} alt="Logo" style={{ color: '#E6AF2E'}}/>
                </div>
                <NavLink exact={true} activeClassName='is-active' to="/" className="nav-link">
                    <p>Wallet</p>
                    <AccountBalanceWalletIcon/>
                </NavLink>
                <NavLink activeClassName='is-active' to="/statistics" className="nav-link">
                    <p>Statistics</p>
                    <TimelineIcon/>
                </NavLink>
                <NavLink activeClassName='is-active' to="/settings" className="nav-link">
                    <p>Settings</p>
                    <SettingsIcon/>
                </NavLink>
        </div>
     );
}
 
export default Navigation;