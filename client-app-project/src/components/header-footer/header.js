import React from 'react';

const header = () => {
    return (
        <header>
            <div className="lc__header-searchbar p-y-16 p-y-md-8">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-3 col-md-12">
                            <div className="lc__openMenu js-open-side">
                                <i className="ic-menu fs-ui-24 txt-white"></i>
                            </div>
                            <div className="lc__logo">
                                <a href="/">
                                    <picture>
                                        <source media="(max-width: 992px)" />
                                        <img src="/frontend_v3/images/longchau-logo.svg"/>
                                    </picture>
                                </a>
                            </div>
                        </div>
                        <div className="col-6 col-md-12">
                        </div>
                        <div className="col-3 col-md-12 custom-cart-mb">
                            <div className="lc__feature-group">
                                <div className="u-flex align-items-center">

                                    <div className="lch-loginsearch block-none js-open-otp" aria-controls="dangnhapsodienthoai">
                                        <div className="u-flex align-items-center">
                                            <i className="ic-doc txt-white fs-ui-32 fs-ui-lg-28 m-r-8 m-r-md-4"></i>
                                            <div className="txt-white">
                                                <p className="fs-ui-14 fs-ui-lg-10 m-b-4">Tra cứu</p>
                                                <p className="fs-ui-16 fs-ui-lg-12 f-w-400">Lịch sử đơn hàng</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lch__cart wrapperCartHeaderDes
                                     lc-tooltip lc-tooltip-grayscale lc-tooltip-bottom lc-tooltip-hover">
                                        <a href="/dat-hang-v3">
                                            <div className="u-flex align-items-baseline relative">
                                                <div className="iconCart">
                                                    <i className="ic-cart fs-ui-32 txt-white fs-ui-lg-28 fs-ui-sm-24"></i>
                                                </div>
                                                <p className="fs-ui-16 txt-white m-l-8 m-l-md-4 fs-ui-lg-12 block-none">
                                                    Giỏ hàng
                                        </p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default header;
