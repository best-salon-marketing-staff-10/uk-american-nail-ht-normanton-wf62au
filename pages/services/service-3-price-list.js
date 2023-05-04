import { serviceList3 } from '/pages/core/info';

export default function Service3PriceList(){
    return(
        <>
            <div className="service-list-3">
                <div className="price-list-details-services">
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <h3 className="price-list-details-services-name">
                                    {serviceList3.service18}
                                </h3>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList3.service18Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList3.service18Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList3.service18Price}
                            </span>
                        </div>
                    </div>
                    <div className="price-list-details-services-container">
                        <div className="price-list-details-services-item">
                            <div className="price-list-details-services-name">
                                <h3 className="price-list-details-services-name">
                                    {serviceList3.service19}
                                </h3>
                                <span className="price-list-details-services-name-notice">
                                    
                                </span>
                            </div>
                            <div className="price-list-details-services-time">
                                <span className="price-list-details-services-time">
                                    {serviceList3.service19Time}
                                </span>
                            </div>
                            <div className="price-list-details-services-description">
                                <span className="price-list-details-services-description">
                                    {serviceList3.service19Description}
                                </span>
                            </div>
                        </div>
                        <div className="price-list-details-services-price">
                            <span className="price-list-addition-info">
                                
                            </span>
                            <span className="price-list-details-services-price">
                               £{serviceList3.service19Price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}