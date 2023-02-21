
function result() {

    let height = (document.querySelector('.height').value) / 100; //division by 100 to get the vallue in m
    let weight = document.querySelector('.weight').value;

    let bmi = weight / (height ** 2)

    let text 
    if (bmi < 18.5) {
        text ='Underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
        text = 'Normal weight'
    } else if (bmi >= 25 && bmi < 30) {
        text = 'Overweight'
    } else if (bmi >= 30 && bmi < 35) {
        text = 'Obesity 1'
    } else if (bmi >= 35 && bmi < 40) {
        text = 'Obesity 2'
    } else text = 'Obesity 3'

    document.querySelector('.answer').innerHTML = text

};

document.addEventListener('keypress', event => {
    if (event.keyCode === 13){
        result()
    }
})

