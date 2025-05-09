let textArea = document.getElementById("textArea");
let speakBtn = document.getElementById("speak");
let audio = document.getElementById("audio");
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let stopBtn = document.getElementById("stop");
let loading = document.getElementById("loading")

let textToSpeak = () => {

  if(textArea.value.trim() !== ""){
    loading.classList.add("loading")

    axios.post('https://api.deepgram.com/v1/speak?model=aura-2-thalia-en',
      { text: textArea.value },
      {
        headers: {
          'Authorization': 'Token 93adc5bb03710ec1f86517b9136580b2406ad4f0',
          'Content-Type': 'application/json'
        },
        responseType: "blob"
      }
    )
      .then(function (response) {
        loading.classList.remove("loading")
        console.log(response);
        
        let audioBlob = new Blob([response.data], { type: response.data.type })
        let audioUrl = URL.createObjectURL(audioBlob)
        console.log(audioUrl)
        audio.src = audioUrl
  
        playBtn.classList.add("hide")
        pauseBtn.classList.remove("hide")
  
        audio.addEventListener("ended", () => {
          playBtn.classList.remove("hide")
          pauseBtn.classList.add("hide")
        })
      })
      .catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Try Again"
        });
      });


      pause.addEventListener("click", () => {
        audio.pause();
        pauseBtn.classList.add("hide")
        playBtn.classList.remove("hide")
      })

      play.addEventListener("click", () => {
        audio.play();
        playBtn.classList.add("hide")
        pauseBtn.classList.remove("hide")
      })

      stopBtn.addEventListener("click", () => {
        audio.pause();
        pauseBtn.classList.add("hide")
        playBtn.classList.remove("hide")
      })
  }
  else{
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Any Text"
    });
  }

}



let logout = document.getElementById("logout")

logout.addEventListener("click", () => {
  
  window.location.replace('./index.html')
})