
$(document).ready(function () {

    $('#fullpage').fullpage({ //initialize
        //set options
        navigation: true,
        navigationPosition: 'right',
        anchors: ['section1', 'section2', 'section3'], //name the anchors for each section
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 1) { //section 2
                section2.play(); //anime.js play method
                section2Title.play(); //anime.js play method
                section2Info.play(); //anime.js play method
            }else if (destination.index == 2) { //section 3
                section3Map.play(); //anime.js play method
                section3Title.play(); //anime.js play method
                section3Footer.play();
                section3Table.play();
            }
        }
    });

    const labels = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '14'
    ];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Dec 2021',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [1134, 1056, 986, 771, 756, 721, 654,
                742, 689, 512, 455, 376, 244, 103],
        }]
    };
    const config = {
        type: 'line',
        data: data
    };
    const myChart = new Chart(
        document.getElementById('dailyChart'),
        config
    );
    var totalCases = document.querySelector('.totalCases');
    var totalHospital = document.querySelector('.totalHospital');
    var totalDeath = document.querySelector('.totalDeath');
    var section1Title = document.querySelector('.section1Title');

    anime({
        targets: section1Title,
        translateY: -80,
        delay: 400,
        duration: 1000
    });
    anime({
        targets: totalCases,
        innerHTML: [0, 257510],
        easing: 'linear',
        round: 1 // Will round the animated value to 1 decimal
    });
    anime({
        targets: '.section1Info',
        translateY: 80,
        delay: anime.stagger(100, { start: 100 }),
    });
    anime({
        targets: totalHospital,
        innerHTML: [0, 1365],
        easing: 'linear',
        round: 1 // Will round the animated value to 1 decimal
    });
    anime({
        targets: totalDeath,
        innerHTML: [0, 678],
        easing: 'linear',
        round: 1 // Will round the animated value to 1 decimal
    });

    var section2 = anime({
        targets: '.greenMan',
        translateY: 10,
        translateX: 60,
        delay: anime.stagger(100, { start: 500 }),
        //direction: 'alternate'
    });
    var section2Title = anime({
        targets: '.section2Title',
        translateY: -80,
        delay: 800,
        duration: 1000
    });
    var section2Info = anime({
        targets: '.section2Info',
        scale: [0.1,1],
        delay: anime.stagger(100, { start: 500 })
    });
    var section3Title = anime({
        targets: '.section3Title',
        translateY: -80,
        delay: 800,
        duration: 1000
    });
    var section3Map = anime({
        targets: '.sgMap',
        scale: [0.1,1],
        delay: anime.stagger(100, { start: 500 })
    });
    var section3Table = anime({
        targets: '.sgTable',
        rotate: [360],
        delay: 800,
        duration: 1500
    });
    var section3Footer = anime({
        targets: '.section3Footer',
        translateY: 210,
        delay: 800,
        duration: 1000
    });
    var level1Title = anime({
        targets: '.level1Title',
        translateY: 80,
        delay: 800,
        duration: 1000
    });

    //DataTable.js
    $('.polyclinicTable').DataTable({
        pageLength: 4,
        lengthMenu: [[5, 4, 3, 2, 1], [5, 4, 3, 2, 1]]
    })

    // Tippy.js script 

    tippy('.Bedok', {
        content: '<strong>Name:</strong> Bedok Polyclinic <br><strong>Address: </strong>11 Bedok North Street 1 Heartbeat@Bedok #02-01, #03-01, Singapore 469662<br><strong>Vaccine Type:</strong> Pfizer<br><strong>Phone:</strong> 6343 1121',
        allowHTML: true,
        followCursor: false
    });
    tippy('.Pasir', {
        content: '<strong>Name:</strong> Pasir Ris Polyclinic<br><strong>Address: </strong>1 Pasir Ris Drive 4, Singapore 519457<br><strong>Vaccine Type:</strong> Comirnaty<br><strong>Phone:</strong> 6765 1125',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Geylang', {
        content: '<strong>Name:</strong> Geylang Polyclinic<br><strong>Address: </strong>21 Geylang East Central, Singapore 389707<br><strong>Vaccine Type:</strong> Pfizer<br><strong>Phone:</strong> 6343 1126',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Marine', {
        content: '<strong>Name:</strong> Marine Parade Polyclinic<br><strong>Address: </strong>80 Marine Parade Central, Singapore 440080<br><strong>Vaccine Type:</strong> Pfizer<br><strong>Phone:</strong> 6765 1123',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Hougang', {
        content: '<strong>Name:</strong> Hougang Polyclinic<br><strong>Address: </strong>89 Hougang Avenue 4, Singapore 538829<br><strong>Vaccine Type:</strong> Pfizer<br><strong>Phone:</strong> 6765 1121',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Batok', {
        content: '<strong>Name:</strong> Bukit Batok Polyclinic<br><strong>Address: </strong>50 Bukit Batok West Avenue 3, Singapore 659164<br><strong>Vaccine Type:</strong> Moderna<br><strong>Phone:</strong> 6343 1122',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Jurong', {
        content: '<strong>Name:</strong> Jurong Polyclinic<br><strong>Address: </strong>190 Jurong East Avenue 1, Singapore 609788<br><strong>Vaccine Type:</strong> Pfizer<br><strong>Phone:</strong> 6765 1122',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Pioneer', {
        content: '<strong>Name:</strong> Pioneer Polyclinic<br><strong>Address: </strong>26 Jurong West Street 61, Singapore 648201<br><strong>Vaccine Type:</strong> Moderna<br><strong>Phone:</strong> 6765 1126',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Choa', {
        content: '<strong>Name:</strong> Choa Chu Kang Polyclinic<br><strong>Address: </strong>2 Teck Whye Crescent, Singapore 688846<br><strong>Vaccine Type:</strong> Moderna<br><strong>Phone:</strong> 6343 1124',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Merah', {
        content: '<strong>Name:</strong> Bukit Merah Polyclinic<br><strong>Address: </strong>162 Bukit Merah Central Level 4, Singapore 150163<br><strong>Vaccine Type:</strong> Pfizer<br><strong>Phone:</strong> 6343 1123',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Outram', {
        content: '<strong>Name:</strong> Outram Polyclinic<br><strong>Address: </strong>3 Second Hospital Avenue, #02-00 Health Promotion Board Building, Singapore 168937<br><strong>Vaccine Type:</strong> Comirnaty<br><strong>Phone:</strong> 6765 1124',
        followCursor: false,
        allowHTML: true
    });
    tippy('.Clementi', {
        content: '<strong>Name:</strong> Clementi Polyclinic<br><strong>Address: </strong>451 Clementi Avenue 3, Singapore 120451<br><strong>Vaccine Type:</strong> Pfizer<br><strong>Phone:</strong> 6343 1125',
        followCursor: false,
        allowHTML: true
    });

});
