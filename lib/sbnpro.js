import axios from 'axios';
import * as cheerio from 'cheerio';

export const sbnpro = async () => {
    let url = 'https://www.sbnpro.com/?s=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('article')
        .map((i, el) => {
            return {
                title: $(el).find('h3 > a').text().trim(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('data-src')
            }
        })
        .toArray();

    return { url, articles };
}