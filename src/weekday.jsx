import React from 'react'
import classnames from 'classnames'
import styles from './weekday.less'
import wrapperStyles from './wrapper.less'

const CRY_SVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64"><circle fill="#ffdd67" cx="32" cy="32" r="30"/><path fill="#664e27" d="m42.684 49.84c-1.801-1.059-3.541-1.701-5.322-2.127-1.775-.426-3.566-.609-5.361-.611-1.799.008-3.588.189-5.361.615-1.781.428-3.52 1.066-5.322 2.123.771-1.977 2.484-3.531 4.396-4.525 1.932-1 4.119-1.486 6.287-1.486 2.166.004 4.354.486 6.283 1.49 1.909.994 3.624 2.546 4.4 4.521"/><path fill="#fff" d="m52.75 30c0 4.971-4.03 9-9 9-4.971 0-9-4.03-9-9 0-4.967 4.03-9 9-9 4.969 0 9 4.03 9 9"/><circle fill="#664e27" cx="43.75" cy="30" r="6"/><g fill="#fff" className={ styles.tearShine }><ellipse cx="45.3" cy="34.469" rx="2.812" ry="3.25"/><ellipse cx="41.529" cy="30" rx="1.645" ry="1.902"/></g><path d="m29.25 30c0 4.971-4.03 9-9 9-4.971 0-9-4.03-9-9 0-4.967 4.03-9 9-9 4.969 0 9 4.03 9 9" fill="#fff" /><circle fill="#664e27" cx="20.25" cy="30" r="6"/><g fill="#fff" className={ styles.tearShine }><ellipse cx="21.801" cy="34.469" rx="2.811" ry="3.25"/><ellipse cx="18.03" cy="30" rx="1.644" ry="1.902"/></g><path className={ styles.tearDrop } fill="#65b1ef" d="m46.35 35c-5.02 6.857-7.895 13.166-7.895 18.352 0 4.406 3.535 7.977 7.898 7.977 4.359 0 7.896-3.57 7.896-7.977.001-5.186-2.964-11.602-7.899-18.352"/><g fill="#917524"><path d="m53.2 19.652c-3.234-2.732-7.523-3.881-11.691-3.133-.58.113-1.09-2.02-.387-2.156 4.811-.863 9.758.461 13.492 3.615.541.469-.969 2.061-1.414 1.674"/><path d="m22.486 16.369c-4.168-.748-8.455.4-11.691 3.133-.443.389-1.955-1.205-1.412-1.674 3.732-3.152 8.68-4.479 13.492-3.615.703.135.191 2.269-.389 2.156"/></g></svg>

export default React.createClass({
    getInitialState() {
        return {
            isRelieved: false
        }
    },

    changeFace(e) {
        this.setState({ isRelieved: true })
        e.preventDefault()
    },

    render() {
        return (
            <div className={ wrapperStyles.section }>
                <div className="row">
                    <div className="col-xs-6">
                        <div className={ styles.faceIconContainer }>
                            { this.state.isRelieved ? (
                                <img src="images/relieved.svg"
                                     className={ styles.relievedIcon } />
                            ) : CRY_SVG }
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <img src="images/burger.svg" className={ styles.burgerIcon } />
                    </div>
                </div>
                <div className={ styles.textContainer }>
                    <p>
                        "So does this mean I have to give up burgers forever??"
                    </p>
                    <p>
                        <a href="#" onClick={ this.changeFace }>Not necessarily</a>.
                    </p>
                    <p>
                        Graham Hill has a <a
                            href="https://www.ted.com/talks/graham_hill_weekday_vegetarian"
                            target="_blank">wonderful TED talk</a> about
                        making an incremental change. Cutting back partway
                        still makes a difference.
                    </p>
                </div>
            </div>
        )
    }
})
