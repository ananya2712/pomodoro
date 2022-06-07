import React from 'react'

const CountdownAnimation = (key , timer , animate,children) => {
  return (
    <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['#FE6F6B', 0.33],
          ['#FE6F6B', 0.33],
          ['#FE6F6B', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#151932"
        onComplete={ () => {
          //stopAimate()
        }}
    >
    {children}  
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation