var express = require('express');
var app = express();

var speakers = [
      {
        id: 0,
        name: 'Анастасия Сергеева',
        photo: 'assets/speakers-photos/asya_sergeeva.jpg',
        link: null,
        shortDescription: 'Эксперт в области computer-mediated communication и профессиональных виртуальных сетей, кандидат психологических наук, сотрудник Университета ИТМО',
        description: '<p>Анастасия Сергеева окончила факультет психологии СпбГУ по специальности «Организационная психология»; в 2013-м году защитила кандидатскую диссертацию в Институте психологии РАН (эргономика, инженерная психология и психология труда).</p><p>Преподает в Университете ИТМО (курсы «Психология общения», «Проблемы сознания и эффективности в конфликтном и функциональном взаимодействии»), разработчик курса «Психология виртуальных коммуникаций и культурология киберпространства». Выступает с публичными лекциями по проблемам перспектив инженерной психологии и по социальной стороне информационной безопасности.</p><p>Область научных интересов — то, как люди разговаривают между собой, общаются, шутят, обманывают, рассказывают истории — и в «живом общении» и в коммуникации с помощью технических средств.</p>',
        meetings: [0]
      },
      {
        id: 1,
        name: 'Валентина Крупадерова',
        photo: 'http://cs628529.vk.me/v628529225/ea8f/PtPDiHe_Kn8.jpg',
        link: null,
        shortDescription: 'Закончила матмех СПбГУ, работает в IT c 2007 года, последние 4 года — в менеджменте. В 2015 году была спикером на конференцияx AgileDays и AnalystDays. Области профессиональных интересов — управление рисками, управление требованиями, кастомизация, построение процессов.',
        description: null
      }, {
        id: 2,
        name: 'Дмитрий Покропский',
        photo: 'http://cs628529.vk.me/v628529225/ea9d/UpKzMZ4uNwI.jpg',
        link: null,
        shortDescription: 'Научный сотрудник лаборатории теории рынков и пространственной экономики научно-исследовательского университета Высшая школа экономики, экономист-математик',
        description: null
      }, {
        id: 3,
        name: 'Михаил Аллахвердов',
        photo: 'http://cs628529.vk.me/v628529225/eaac/U3-t4O1gJLA.jpg',
        link: null,
        shortDescription: 'Ассистент кафедры проблем конвергенции естественных и гуманитарных наук СПбГУ, медиатор, специалист по управлению конфликтами.',
      }, {
        id: 4,
        name: 'Алексей Натекин',
        organisation: 'Data Mining Labs, Diginetica',
        description: 'Сооснователь Data Mining Labs, директор данных Diginetica, глава группы анализа данных института аналитики Deloitte',
        photo: 'http://cs628529.vk.me/v628529225/eabf/r3EkRVV4lyU.jpg',
        link: 'google.com'
      }
    ];
var meetings = [
      {
        id: 0,
        title: 'Реальность виртуальной коммуникации',
        time: 1440950400448,
        speakers: [0],
        timepadLink: 'https://thinksharp.timepad.ru/event/233302/',
        description: '<p>Анастасия Сергеева расскажет о том, как мы воспринимаем общение в виртуальных социальных сетях, и как это общение меняет нас.</p><p>Несмотря на то, что еще с начала 2010-х годов ряд исследователей и публицистов предсказывали скорую смерть виртуальных социальных сетей (Facebook, Twitter, Вконтакте), они по-прежнему процветают; более того, общение в них постепенно охватывает все больший круг тем: от личного, дружеского общения, до профессиональной и бизнес-коммуникации. Процент времени, который средний пользователь проводит в виртуальных сетях, также увеличился в разы и с учетом мобильных приложений иногда составляет до 90% рабочего времени. Иными словами — людям по-прежнему нравятся социальные сети и общение в них.</p><p>Вопрос в том, а почему они собственно нравятся? В чем психологические причины привлекательности виртуальных социальных сетей?</p><p>В лекции мы рассмотрим, что получает человек, находясь в виртуальной социальной сети, какие внешние и внутренние факторы влияют на то, как он будет себя вести, как работает сетевое доверие и недоверие и как, судя по нынешним тенденциям, будет выглядеть виртуальная социальная сеть через 15-20 лет.</p>',
        timepadCustomizedId: 11350,
        timepadEventId: 236802,
        place: 0
      }
    ];

var places = [
      {
        id: 0,
        title: 'Офис JetBrains',
        address: 'Университетская набережная 7-9-11, корпус 5А',
        yaMapId: 'HV03escVDNTT1fzr3KmARPDVMFgDEMHN'
      }
    ];

var organizers = [
      {
        id: 0,
        name: 'Антон Афанасьев',
        photo: '../assets/anton-afanasyev.jpg',
        link: 'https://vk.com/anton.afanasyev'
      },
      {
        id: 1,
        name: 'Антон Зельдин',
        photo: '../assets/anton-zeldin.jpg',
        link: 'https://vk.com/neferzem'
      },
      {
        id: 2,
        name: 'Дарья Романова',
        photo: '../assets/daria-romanova.jpg',
        link: 'https://vk.com/d.b.romanova'
      },
      {
        id: 3,
        name: 'Дмитрий Калупин',
        photo: '../assets/dmitri-kalupin.jpg',
        link: 'https://vk.com/awarehouse'
      },
      {
        id: 4,
        name: 'Дмитрий Заика',
        photo: '../assets/dmitri-zaika.jpg',
        link: 'https://vk.com/dmitry_zaika'
      }
    ];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/speakers', function (req, res) {
  res.send(JSON.stringify(speakers));
});

app.get('/places', function (req, res) {
  res.send(JSON.stringify(places));
});

app.get('/meetings', function (req, res) {
  res.send(JSON.stringify(meetings));
});

server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

