import React from 'react';
import PropTypes from 'prop-types';

function ContentText(props) {
    const { isShow, onClickShowMore } = props;

    function handleClickShow(value) {
        if(onClickShowMore){
            return onClickShowMore(value);
        }
    }

    function content() {
        return <p>
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
      </p>
    }

    return (
        <div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            {
                isShow ?
                    content()
                    :
                    <button onClick={() => handleClickShow(true)}>Xem thêm</button>
            }
        </div>
    )
}

ContentText.propTypes = {
    onClickShowMore: PropTypes.func,
    isShow: PropTypes.bool
}

ContentText.defaultPropTypes = {
    onClickShowMore: null,
    isShow: false
}
export default ContentText

