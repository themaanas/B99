var embedUrl;
var expandUrl;
const {
    OpenloadScraper
} = require('openload-scraper');
const expander = require("url-expander-tool");
var hex2ascii = require("hex2ascii");
const googl = expander.shorteners.googl("AIzaSyBHIbubK8DB5_yCbyjVzDI3UWht11_c450");
var request = require("request");
var express = require('express');
var app = express();
var opn = require("opn")
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/season', function(req, res) {
    var season = parseInt(req.body.season);
    if (season == 1) {
        embedArr = season1;
    } else if (season == 2) {
        embedArr = season2;
    } else if (season == 3) {
        embedArr = season3;
    } else if (season == 4) {
        embedArr = season4;
    } else if (season == 5) {
        embedArr = season5;
    }
    embedUrl = embedArr[parseInt(req.body.episode)]
    console.log(embedUrl);
    if (season < 4) {
        googl(embedUrl).then(function(value) {
            console.log(value);
            expandUrl = value.substr(26, value.substr(26).indexOf("/"));
            (async () => {
                const url = 'https://oload.tv/embed/' + expandUrl;
                const scrap = await new OpenloadScraper().scrap(url);
                if (scrap.success) {
                    console.log(scrap.data.sources[0].url);
                    res.status(200).send({
                        url: scrap.data.sources[0].url,
                        openload: embedUrl
                    });
                }
            })();
        });
    } else {
        expandUrl = embedUrl.substr(26, embedUrl.substr(26).indexOf("/"));
        (async () => {
            // const url = 'https://oload.tv/embed/' + expandUrl;
            const url = embedUrl;
            const scrap = await new OpenloadScraper().scrap(url);
            if (scrap.success) {
                console.log(scrap.data.sources[0].url);
                res.status(200).send({
                    url: scrap.data.sources[0].url,
                    openload: embedUrl
                });
            }
        })();
    }

    console.log(req.body);
});

app.listen(8000);




var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    console.log("you entered: [" +
        d.toString().trim() + "]");

});

function hi() {
    console.log("hi");
}


function start() {

}
//22
var season1 = ['https://goo.gl/5tG9RK',
              'https://goo.gl/6NLQPh',
              'https://goo.gl/A1E4Uj',
              'https://goo.gl/EoVXJA',
              'https://goo.gl/w3q8E5',
              'https://goo.gl/fBFPYU',
              'https://goo.gl/Hr614c',
              'https://goo.gl/RuiUzM',
              'https://goo.gl/oBqk2T',
              'https://goo.gl/Zx7LG5',
              'https://goo.gl/uoMPjV',
              'https://goo.gl/Dt34nj',
              'https://goo.gl/7bDLXr',
              'https://goo.gl/CiJ7G4',
              'https://goo.gl/rP8ugn',
              'https://goo.gl/4PuV9x',
              'https://goo.gl/6Tur1k',
              'https://goo.gl/X2cxAi',
              'https://goo.gl/8gBmQv',
              'https://goo.gl/8RonXi',
              'https://goo.gl/fw8sBG',
              'https://goo.gl/qkYMEF'];
//23
var season2 = ['https://goo.gl/oiPxRn',
              'https://goo.gl/MYd8Mv',
              'https://goo.gl/3wb6Es',
              'https://goo.gl/ymniJe',
              'https://goo.gl/QxqYCW',
              'https://goo.gl/K1CpLT',
              'https://goo.gl/TQtibk',
              'https://goo.gl/V8GJw8',
              'https://goo.gl/GBM758',
              'https://goo.gl/YE1nJS',
              'https://goo.gl/z5wKAd',
              'https://goo.gl/mBXbf4',
              'https://goo.gl/yuQjYW',
              'https://goo.gl/kwgbMk',
              'https://goo.gl/5yayYN',
              'https://goo.gl/e3qb3C',
              'https://goo.gl/3tCiWS',
              'https://goo.gl/odpyfi',
              'https://goo.gl/TZtiWr',
              'https://goo.gl/z3jQNT',
              'https://goo.gl/zT2drj',
              'https://goo.gl/xqaciS',
              'https://goo.gl/T32RHK'];
//23
var season3 = ['https://goo.gl/zEQHH9',
              'https://goo.gl/EAhMDT',
              'https://goo.gl/aVah4D',
              'https://goo.gl/4LcnWc',
              'https://goo.gl/TDTP9C',
              'https://goo.gl/tjALrj',
              'https://goo.gl/qzfqNF',
              'https://goo.gl/Vo1AJ6',
              'https://goo.gl/z7sFm9',
              'https://goo.gl/BdgBzs',
              'https://goo.gl/mjaGZk',
              'https://goo.gl/MnisA6',
              'https://goo.gl/KiMxWs',
              'https://goo.gl/Kpr91L',
              'https://goo.gl/YWLSUX',
              'https://goo.gl/VVVKnb',
              'https://goo.gl/1Qd4M8',
              'https://goo.gl/gbbvUV',
              'https://goo.gl/dGUCWn',
              'https://goo.gl/VDY1Un',
              'https://goo.gl/65Jio2',
              'https://goo.gl/v8GS5h',
              'https://goo.gl/EZ6hTd'];
//22
var season4 = ['https://openload.co/embed/hHaaxhm8TP8',
              'https://openload.co/embed/dJYfSgSFMXI',
              'https://openload.co/embed/tBLGujSuDkI',
              'https://openload.co/embed/ufik8Cf-VD8',
              'https://openload.co/embed/XZasYNe8hyE',
              'https://openload.co/embed/p733vdFVP_8',
              'https://openload.co/embed/782DBcnS2mE',
              'https://openload.co/embed/CrgIJAjjy_c',
              'https://openload.co/embed/ggsEi8XNqio',
              'https://openload.co/embed/2vHDZ5WmznQ',
              'https://openload.co/embed/KVlrdHVgOUc',
              'https://openload.co/embed/KVlrdHVgOUc',
              'https://openload.co/embed/pedKA-z4zrI',
              'https://openload.co/embed/WfyDroHAIGE',
              'https://openload.co/embed/gSJn9hWty10',
              'https://openload.co/embed/0ri4Dpr2OsM',
              'https://openload.co/embed/P0mVxMZs-NU',
              'https://openload.co/embed/d6W917JgzJY',
              'https://openload.co/embed/Duuvf5rJQKw',
              'https://openload.co/embed/Qg4onuP59rI',
              'https://openload.co/embed/bgD0EqKQzx8',
              'https://openload.co/embed/va0IO27BuWY'];
//22
var season5 = ['https://openload.co/embed/q7yd61EzaqI',
              'https://openload.co/embed/u4h6_pKT87U',
              'https://openload.co/embed/rD9xgVWD1Ao',
              'https://openload.co/embed/XoxgGViBxt0',
              'https://openload.co/embed/LE_J7IvKpnc',
              'https://openload.co/embed/751kt82naPI',
              'https://openload.co/embed/folg1WJX9Uo',
              'https://openload.co/embed/8QxNT0v-0bI',
              'https://openload.co/embed/gxlSbFr0YsA',
              'https://openload.co/embed/IDAhbHFTtmg',
              'https://openload.co/embed/L-r_uPFtEnY',
              'https://openload.co/embed/E5ML7r1nTJM',
              'https://openload.co/embed/L5Z1oiDOhas',
              'https://openload.co/embed/4Ov7xf0YnII',
              'https://openload.co/embed/5mHB6-rOB1M',
              'https://openload.co/embed/zX1FJmB2akY',
              'https://openload.co/embed/rL4SGqjQ-40',
              'https://openload.co/embed/uU82dyjTiT4',
              'https://openload.co/embed/gyQ1aE2i6G0',
              'https://openload.co/embed/ZpD3WRtwutg',
              'https://openload.co/embed/XFESAjPj7Ks',
              'https://openload.co/embed/ejoCjGUmTas'];

opn('http://localhost:8000');
