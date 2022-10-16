import axios from 'axios';
import * as cheerio from 'cheerio';

export const lintaspublik = async () => {
    let url = 'https://www.lintaspublik.id/search/label/Siantar?&max-results=10';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('.post')
        .map((i, el) => {
            return {
                title: $(el).find('h2 > a').text().trim(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('src')
            }
        })
        .toArray();

    return { url, articles };
}