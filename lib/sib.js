import axios from 'axios';
import * as cheerio from 'cheerio';

export const sib = async () => {
    let url = 'https://www.hariansib.com/?q=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('article')
        .map((i, el) => {
            return {
                title: $(el).find('a').attr('title').trim(),
                url: $(el).find('a').attr('href'),
                image: extract($(el).find('figure').attr('style'))
            }
        })
        .toArray();

    return { url, articles };
}

const extract = (text) => {
    if (text) {
        let regex = /\bhttps?:\/\/\S+/gi;
        let url = text?.match(regex)[0];
        return url.substring(0, url.length - 2);
    }
};