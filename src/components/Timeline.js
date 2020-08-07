import React from 'react'
import { connect } from 'react-redux'

const Timeline = () => {
   return <div>Timeline</div>
}

const mapStateToProps = (state) => {
   return { userInfo: state.userInfo }
}

export default connect(mapStateToProps)(Timeline)
