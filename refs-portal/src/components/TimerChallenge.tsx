interface TimerProps{
    title:string;
    targetTime:number;
}
export default function TimerChallenge({title,targetTime}:TimerProps){
      return(
            <section>
              <h2>{title}</h2>
              <p className="challenge-time">{targetTime}second{targetTime>1?'s':''}</p>
               
            </section>

      )
}