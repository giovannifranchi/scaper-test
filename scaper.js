const request = require('request');
const cheerio = require('cheerio');

request('https://www.shakespeare.org.uk/explore-shakespeare/shakespedia/shakespeares-plays/hamlet', (error, res, html)=>{
    if(!error && res.statusCode === 200){
        const $ = cheerio.load(html);

        const main = $('.rich-text');
        const paragrphs = main.children('p');

        const list = [];

        paragrphs.each((i, el)=>{
            const item = $(el).text()
            if(item.includes('ghost')){
                list.push(item);
            }
        });
       console.log(list);
    }
});

