var convertDegrees = function(degree) {
    degrees = degree * -1;
        if (degrees < 0) {
            degrees = degrees + 360;
        }
        return degrees;
}


var calculate = function(x1, z1, d1, x2, z2, d2) {
    x1 = Number(x1.value);
    z1=Number(z1.value);
    d1=Number(d1.value);
    x2=Number(x2.value);
    z2=Number(z2.value);
    d2=Number(d2.value);

    firstDegrees = convertDegrees(d1);
    secondDegrees = convertDegrees(d2);

    m1 = Math.tan(firstDegrees * Math.PI / 180);
    b1 = -1 * m1 * z1 + x1;

    m2 = Math.tan(secondDegrees * Math.PI / 180);
    b2 = -1 * m2 * z2 + x2;

    destinationZ = (b2 - b1) / (m1 - m2);
    destinationX = (m2 * b1 - m1 * b2) / (m2 - m1);

    var answer = document.querySelector('#answer');
    if(answer) {
        answer.remove();
    }

    answer = document.createElement('p');
    answer.id = 'answer';

    answer.textContent = "The closest Stronghold in your world is located at: " + Math.trunc(destinationX) + ", Y, " + Math.trunc(destinationZ);
    document.querySelector('body').appendChild(answer);
}


