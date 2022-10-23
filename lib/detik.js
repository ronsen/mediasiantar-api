import axios from 'axios';
import * as cheerio from 'cheerio';

export const detik = async () => {
    let url = 'https://www.detik.com/search/searchall?query=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('article')
        .map((i, el) => {
            return {
                title: $(el).find('h2').text(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('src')
            }
        })
        .toArray();

    return { url, articles };
}