import React from 'react'
import icClient from '../../assets/images/ic_client.svg';
import icServer from '../../assets/images/ic_server.svg';
import icStatistics from '../../assets/images/ic_statistics.svg';
import icSetting from '../../assets/images/ic_setting.svg';
import icClientActive from '../../assets/images/ic_client_active.svg';
import icServerActive from '../../assets/images/ic_server_active.svg';
import icStatisticsActive from '../../assets/images/ic_statistics_active.svg';
import icSettingActive from '../../assets/images/ic_setting_active.svg';
import icLogOut from '../../assets/images/ic_logout.svg';
import ItemNavbar from '../item_navbar/ItemNavbar';
function NavBar() {
    return (
        <div className='boxNavbar'>
            <div className='boxTopNavbar'>
                <div className='line' />
                <ItemNavbar icon={icStatistics}
                    iconActive={icStatisticsActive}
                    title={'Statictics'}
                    isActive={true} />
                <ItemNavbar icon={icServer}
                    iconActive={icServerActive}
                    title={'Server'}
                    isActive={false} />
                <ItemNavbar icon={icClient}
                    iconActive={icClientActive}
                    title={'Client'}
                    isActive={false} />
                <ItemNavbar icon={icServer}
                    iconActive={icServerActive}
                    title={'Registered users'}
                    isActive={false} />
                <div className='textAccount'>ACCOUNT</div>
                <ItemNavbar icon={icSetting}
                    iconActive={icSettingActive}
                    title={'Setting'}
                    isActive={false} />
                <ItemNavbar icon={icLogOut}
                    title={'Log out'}
                    isActive={false} />
            </div>
            <div className='boxEmailNavbar'>timbershaws@mail.com</div>
        </div>
    )
}

export default NavBar