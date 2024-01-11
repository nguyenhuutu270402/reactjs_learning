import React from 'react'
import './HomePage.css'

import NavBar from '../../components/navbar/NavBar';
import ItemServer from '../../components/item_server/ItemServer';

import icDownload from '../../assets/images/ic_download.svg';
import icUpload from '../../assets/images/ic_upload.svg';
import icLoss from '../../assets/images/ic_ping.svg';
import icPing from '../../assets/images/ic_loss.svg';
import circleChart from '../../assets/images/circle_chart.svg';





function HomePage() {
    return (
        <div className='containerHome'>
            <NavBar />
            <div className='boxStatistics'>
                <div className='txtStatistics'>Statistics</div>
                <div className='boxStatisticsContent'>
                    <div className='boxStatisticsLeft'>
                        <img className='chartTop' alt='chart' src={require('../../assets/images/line_chart2.png')} />
                        <img className='chartBottom' alt='chart' src={require('../../assets/images/line_chart1.png')} />
                    </div>
                    <div className='boxStatisticsRight'>
                        <div className='txtServers'>Servers</div>
                        <div className='listviewServer'>
                            <ItemServer isActive={true} />
                            <ItemServer />
                            <ItemServer />
                            <ItemServer />
                            <ItemServer />
                            <ItemServer />
                            <ItemServer />
                            <ItemServer />
                            <ItemServer />
                            <ItemServer />
                        </div>
                        <div className='txtServers mrt10'>Connection speed</div>
                        <div className='boxConnectionSpeed'>
                            <div className='boxDownload'>
                                <img className='imageDownload' alt='download' src={icDownload} />
                                <div className='boxInforDownload'>
                                    <div className='txtDownload'>Download</div>
                                    <div className='boxDownloadValue'>
                                        <div className='txtDownloadValue'>27.83</div>
                                        <div className='txtDownloadUnit'>Mb/s</div>
                                    </div>
                                </div>
                            </div>
                            <div className='line2' />
                            <div className='boxDownload'>
                                <img className='imageDownload' alt='download' src={icUpload} />
                                <div className='boxInforDownload'>
                                    <div className='txtDownload'>Upload</div>
                                    <div className='boxDownloadValue'>
                                        <div className='txtDownloadValue'>27.83</div>
                                        <div className='txtDownloadUnit'>Mb/s</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='boxPingLoss'>
                            <div className='boxPing'>
                                <img className='imagePing' alt='ping' src={icPing} />
                                <div className='txtPing'>Ping 25ms</div>
                            </div>
                            <div className='boxPing'>
                                <img className='imagePing' alt='loss' src={icLoss} />
                                <div className='txtPing'>Loss 0%</div>
                            </div>
                        </div>

                        <div className='boxChartCircle'>
                            <img className='circleChart' alt='chart' src={circleChart} />
                        </div>

                        <div className='boxLocationIP'>
                            <div className='boxLoaction'>
                                <div className='txtLocation'>Location</div>
                                <div className='txtLocationValue'>US - Miami</div>

                            </div>
                            <div className='line3' />

                            <div className='boxLoaction'>
                                <div className='txtLocation'>Location</div>
                                <div className='txtLocationValue'>US - Miami</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage