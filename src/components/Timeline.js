import React from 'react'
import { connect } from 'react-redux'

import ReturnHome from './ReturnHome'

const Timeline = () => {
   return <ReturnHome />
}

const mapStateToProps = (state) => {
   return { userInfo: state.userInfo }
}

export default connect(mapStateToProps)(Timeline)
