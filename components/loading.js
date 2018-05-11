import React from 'react'

const loading = ({ fetchingData }) => (fetchingData.isFetch ? <div className="loading" /> : null)

export default loading
