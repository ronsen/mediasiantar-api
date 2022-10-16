import axios from 'axios';
import * as cheerio from 'cheerio';

export const idntimes = async () => {
    let url = 'https://www.idntimes.com/tag/pematangsiantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('.box-list')
        .map((i, el) => {
            return {
                title: $(el).find('h3').text(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('data-src')
            }
        })
        .toArray();

    return { url, articles };
}