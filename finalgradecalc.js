//Calculate the final grade given form inputs
function calcFinalGrade() {
    //Form Input Variables
    var mp1In = document.getElementById("gradeCalculator").elements.namedItem("MP1").value;
    var mp2In = document.getElementById("gradeCalculator").elements.namedItem("MP2").value;
    var mp3In = document.getElementById("gradeCalculator").elements.namedItem("MP3").value;
    var mp4In = document.getElementById("gradeCalculator").elements.namedItem("MP4").value;
    var midIn = document.getElementById("gradeCalculator").elements.namedItem("Midterm").value;
    var finIn = document.getElementById("gradeCalculator").elements.namedItem("Final").value;

    //Quality point variables
    var mp1 = qualPoint(mp1In);
    var mp2 = qualPoint(mp2In);
    var mp3 = qualPoint(mp3In);
    var mp4 = qualPoint(mp4In);
    var mid = qualPoint(midIn);
    var fin = qualPoint(finIn);

    //Final quality points
    var qualPoints;

    //Final letter grade
    var finalGrade;

    //MP fail counter
    var failCount = 0;

    //MP fail count calculation
    if (mp1 === 0) {
        failCount++;
    }
    if (mp2 === 0) {
        failCount++;
    }
    if (mp3 === 0) {
        failCount++;
    }
    if (mp4 === 0) {
        failCount++;
    }

    //No midterm/final final quality point calculation
    if (midIn === "No Midterm" || finIn === "No Final") {
        if (midIn === "No Midterm" && finIn === "No Final") {
            qualPoints = ((mp1 + mp2 + mp3 + mp4) * 2.5) / 10;
        } else if (midIn === "No Midterm" && finIn !== "No Final") {
            qualPoints = ((mp1 + mp2 + mp3 + mp4 + fin) * 2) / 10;
        } else if (midIn !== "No Midterm" && finIn === "No Final") {
            qualPoints = ((mp1 + mp2 + mp3 + mp4 + mid) * 2) / 10;
        }
    }
    //Normal final quality point calculation
    else {
        qualPoints = (((mp1 + mp2 + mp3 + mp4) * 2) + mid + fin) / 10;
    }

    //Final letter grade
    finalGrade = calcFin(qualPoints, failCount);

    //Output to HTML document
    document.getElementById("showGrade").innerHTML = finalGrade;
    document.getElementById("showQualPoints").innerHTML = qualPoints;
    document.getElementById("fails").innerHTML = failCount;
}

//Calculates final letter grade given quality points and fail count
function calcFin(qualPointsIn, failCountIn) {
    //Automatic failure for 3 MP fails
    if (failCountIn >= 3) {
        return "F";
    } else if (qualPointsIn >= 3.5) {
        return "A";
    } else if (qualPointsIn >= 2.5) {
        return "B";
    } else if (qualPointsIn >= 1.5) {
        return "C";
    } else if (qualPointsIn >= 0.6) {
        return "D";
    } else {
        return "F";
    }
}

//Calculates quality points given form input
function qualPoint(inputVar) {
    switch (inputVar) {
        case "A":
            return 4;
            break;
        case "B":
            return 3;
            break;
        case "C":
            return 2;
            break;
        case "D":
            return 1;
            break;
        case "F":
            return 0;
            break;
        default:
            return 0;
            break;
    }
}

//Resets all values and outputs to 0
function resetValue() {
    document.getElementById("showGrade").innerHTML = "Click Calculate.";
    document.getElementById("showQualPoints").innerHTML = "0.0";
    document.getElementById("fails").innerHTML = 0;
}
