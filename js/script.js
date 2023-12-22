//jam=waktu 
function getTimeOfDay() {
    const hour = new Date().getHours();
    
    if (hour >= 3 && hour < 9)
        return "Sudah pagi!!!";
    else if (hour >= 9 && hour < 13)
        return "Sudah Menjelang siang!!!";
    else if (hour >= 13 && hour < 18)
        return "Sudah Sore Waktu Balik!!!";
    else
        return "Sudah Malam!!! Lanjut Waktu NgepusRank";    
}

function getCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date();
    return currentDate.toLocaleDateString('id-ID', options);
}

// Output
const timeOfDay = getTimeOfDay();
document.getElementById('waktu').innerText = `Hey Bro! ${timeOfDay}!`;
document.getElementById('date').innerText = getCurrentDate();




