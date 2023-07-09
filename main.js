function Ants() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    sc = m15.soundClassifier("https://teachablemachine.withgoogle.com/models/EO1tMvGb0/.model.json", modelloaded);

}


function modelloaded() {

    sc.classify(gotResults);
}

function gotResults(error, results) {

    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById('iinputnow').innerHTML += "I can Hear-" + results[0].label;
        document.getElementById('ainputnow').innerHTML = "Accuracy: " + results[0].confidence.toFixed(2);
        itis = document.getElementById('upable');
        if (results[0].label == "Background Noise") {
            itis.src = "AshamedVainDamselfly-size_restricted.gif";
        } else if (results[0].label == "Dog") {
            itis.src = "360_F_41675161_ZXCYtzeFlNMI5mQ51p4sa5flTttH9bHZ.jpg";
        } else if (results[0].label == "Cat") {
            itis.src = "download (1).jpg";
        } else if (results[0].label == "BADGUY") {
            itis.src = "download (3).jpg";
        } else if (results[0].label == "Wolf") {
            itis.src = "download (2).jpg";
        } else if (results[0].label == "Bear") {
            itis.src = "download.jpg";
        } else if (results[0].label == "Frog") {
            itis.src = "download.png";
        } else if (results[0].label == "Lion") {
            itis.src = "download (4).jpg";
        }



    }


}