import React from 'react'
import classnames from 'classnames'
import rainbowSvg from './rainbow_svg.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                <div className="row middle-xs center-xs">
                    <div className="col-xs-12 col-sm-3">
                        { rainbowSvg }
                    </div>
                    <div className="text-container col-xs-12 col-sm-9">
                        Switching to a plant-based diet is good for more than
                        just the environment &mdash; it's great for health, is
                        easy on the purse, reduces the number of animals raised
                        in cruelty and confinement, and has the potential to
                        ease world hunger.
                    </div>
                </div>

                <div className="row middle-xs center-xs">
                    <div className="text-container col-xs-12 col-sm-9">
                        Thanks for listening to this old bear ramble. He's
                        going to go snack on some berries now.
                    </div>
                    <div className="col-xs-12 col-sm-3">
                        <img className="icon" src="images/bear.svg" />
                    </div>
                </div>
            </div>
        )
    }
})
