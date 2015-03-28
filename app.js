var app = {
    characters: _.shuffle(
        [
            {character:"ก", thaiName:"ก ไก่", englishName:"go gai", meaning:"chicken", charClass:"mid"},
            {character:"ข", thaiName:"ข ไข่", englishName:"kho khai", meaning:"egg", charClass:"high"},
            {character:"ฃ", thaiName:"ฃ ขวด", englishName:"kho khuat", meaning:"bottle (obsolete)", charClass:"high"},
            {character:"ค", thaiName:"ค ควาย", englishName:"kho khwai", meaning:"buffalo", charClass:"low"},
            {character:"ฅ", thaiName:"ฅ คน", englishName:"kho khon", meaning:"person (obsolete)", charClass:"low"},
            {character:"ฆ", thaiName:"ฆ ระฆัง", englishName:"kho ra-khang", meaning:"bell", charClass:"low"},
            {character:"ง", thaiName:"ง งู", englishName:"ngo ngu", meaning:"snake", charClass:"low"},
            {character:"จ", thaiName:"จ จาน", englishName:"cho chan", meaning:"plate", charClass:"mid"},
            {character:"ฉ", thaiName:"ฉ ฉิ่ง", englishName:"cho ching", meaning:"cymbals", charClass:"high"},
            {character:"ช", thaiName:"ช ช้าง", englishName:"cho chang", meaning:"elephant", charClass:"low"},
            {character:"ซ", thaiName:"ซ โซ่", englishName:"so so", meaning:"chain", charClass:"low"},
            {character:"ฌ", thaiName:"ฌ เฌอ", englishName:"cho choe", meaning:"tree", charClass:"low"},
            {character:"ญ", thaiName:"ญ หญิง", englishName:"yo ying", meaning:"woman", charClass:"low"},
            {character:"ฎ", thaiName:"ฎ ชฎา", englishName:"do cha-da", meaning:"headdress", charClass:"mid"},
            {character:"ฏ", thaiName:"ฏ ปฏัก", englishName:"to pa-tak", meaning:"goad, javelin", charClass:"mid"},
            {character:"ฐ", thaiName:"ฐ ฐาน", englishName:"tho than", meaning:"pedestal", charClass:"high"},
            {character:"ฑ", thaiName:"ฑ มณโฑ", englishName:"to monto", meaning:"Montho, character from Ramayana", charClass:"low"},
            {character:"ฒ", thaiName:"ฒ ผู้เฒ่า", englishName:"to pu-tao", meaning:"elder", charClass:"low"},
            {character:"ณ", thaiName:"ณ เณร", englishName:"no nen", meaning:"samanera", charClass:"low"},
            {character:"ด", thaiName:"ด เด็ก", englishName:"do dek", meaning:"child", charClass:"mid"},
            {character:"ต", thaiName:"ต เต่า", englishName:"to tao", meaning:"turtle", charClass:"mid"},
            {character:"ถ", thaiName:"ถ ถุง", englishName:"to tung", meaning:"sack", charClass:"high"},
            {character:"ท", thaiName:"ท ทหาร", englishName:"to tahan", meaning:"soldier", charClass:"low"},
            {character:"ธ", thaiName:"ธ ธง", englishName:"to tong", meaning:"flag", charClass:"low"},
            {character:"น", thaiName:"น หนู", englishName:"no nu", meaning:"mouse", charClass:"low"},
            {character:"บ", thaiName:"บ ใบไม้", englishName:"bo baimai", meaning:"leaf", charClass:"mid"},
            {character:"ป", thaiName:"ป ปลา", englishName:"bpo bpla", meaning:"fish", charClass:"mid"},
            {character:"ผ", thaiName:"ผ ผึ้ง", englishName:"pho phueng", meaning:"bee", charClass:"high"},
            {character:"ฝ", thaiName:"ฝ ฝา", englishName:"fo fa", meaning:"lid", charClass:"high"},
            {character:"พ", thaiName:"พ พาน", englishName:"pho phan", meaning:"Phan", charClass:"low"},
            {character:"ฟ", thaiName:"ฟ ฟัน", englishName:"fo fan", meaning:"teeth", charClass:"low"},
            {character:"ภ", thaiName:"ภ สำเภา", englishName:"po sam-pao", meaning:"sailboat", charClass:"low"},
            {character:"ม", thaiName:"ม ม้า", englishName:"mo ma", meaning:"horse", charClass:"low"},
            {character:"ย", thaiName:"ย ยักษ์", englishName:"yo yak", meaning:"giant, yaksha", charClass:"low"},
            {character:"ร", thaiName:"ร เรือ", englishName:"ro ruea", meaning:"boat", charClass:"low"},
            {character:"ล", thaiName:"ล ลิง", englishName:"lo ling", meaning:"monkey", charClass:"low"},
            {character:"ว", thaiName:"ว แหวน", englishName:"wo waen", meaning:"ring", charClass:"low"},
            {character:"ศ", thaiName:"ศ ศาลา", englishName:"so sala", meaning:"pavilion Sala", charClass:"high"},
            {character:"ษ", thaiName:"ษ ฤๅษี", englishName:"so rue-si", meaning:"hermit", charClass:"high"},
            {character:"ส", thaiName:"ส เสือ", englishName:"so suea", meaning:"tiger", charClass:"high"},
            {character:"ห", thaiName:"ห หีบ", englishName:"ho hip", meaning:"box", charClass:"high"},
            {character:"ฬ", thaiName:"ฬ จุฬา", englishName:"lo chu-la", meaning:"kite", charClass:"low"},
            {character:"อ", thaiName:"อ อ่าง", englishName:"o ang", meaning:"basin", charClass:"mid"},
            {character:"ฮ", thaiName:"ฮ นกฮูก", englishName:"ho nok-huk", meaning:"owl", charClass:"low"}
        ]
    ),
    api: (function() {
        var templateString = document.querySelector("script[type=template]").textContent;
        var templateFn = _.template(templateString, {
            interpolate: /{{([\s\S]+?)}}/g
        });
        var i = 0;

        function goNext() {
            showDetails(false);
            if(i === app.characters.length + 1) {
                i = 0;
            }
            showCharacter(++i);
        }

        function goBack() {
            showDetails(true);
            if(i === 0) {
                i = app.characters.length;
            }
            showCharacter(--i);
        }

        function showDetails(visible) {
            if(arguments.length === 0) visible = true;
            var addOrRemove = visible ? "add" : "remove";
            document.body.classList[addOrRemove]("show-details");
        }

        function showCharacter(i) {
            document.body.innerHTML = templateFn(app.characters[i]);
        }

        return {
            goNext : goNext,
            goBack : goBack,
            showDetails: showDetails
        };
    })(),
    setUpEvents: function(api) {
        document.body.addEventListener("click", function(e) {
            if(e.x < window.innerWidth * 1/3) {
                api.goBack();
            } else if(e.x > window.innerWidth * 2/3) {
                api.goNext();
            } else {
                api.showDetails();
            }
        }, false);

        document.body.addEventListener("keyup", function(e) {
            var actions = {
                37: api.goBack, // left arrow
                39: api.goNext, // right arrow
                40: api.showDetails // down arrow
            }
            var action = actions[e.keyCode];
            if(action) {
                action();
            }
        }, false);
    },
    init: function() {
        app.setUpEvents(app.api);
        app.api.goNext();
    }
}


