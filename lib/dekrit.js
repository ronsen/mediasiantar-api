import axios from 'axios';
import * as cheerio from 'cheerio';

export const dekrit = async () => {
    let url = 'https://www.dekrit.id/?s=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('article')
        .map((i, el) => {
            return {
                title: $(el).find('h3 > a').text(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('src')
            }
        })
        .toArray();

    return { url, articles };
}