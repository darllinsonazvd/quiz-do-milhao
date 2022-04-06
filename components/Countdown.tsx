import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Countdown.module.css'

interface CountdownProps {
  key: any
  duration: number
  timeIsOver: () => void
}

export default function Countdown(props: CountdownProps) {
  return (
    <div className={styles.countdown}>
      <CountdownCircleTimer
        isPlaying
        size={120}
        duration={props.duration}
        onComplete={props.timeIsOver}
        colors={['#bce596', '#f7b801', '#ed827a']}
        colorsTime={[10, 5, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}
