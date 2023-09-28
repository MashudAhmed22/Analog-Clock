let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let seconds=document.getElementById("seconds");

function watchTime(){
      let time=new Date();

      let hr=time.getHours();
      let mnt=time.getMinutes();
      let sec=time.getSeconds();

      let hrotation=30 * hr + mnt/2;
      let mrotation=6*mnt;
      let srotation=6*sec;
      
      hours.style.transform= `rotate(${hrotation}deg)`;
      minutes.style.transform= `rotate(${mrotation}deg)`;
      seconds.style.transform= `rotate(${srotation}deg)`;
}
setInterval(watchTime,1000);
window.onload=watchTime;