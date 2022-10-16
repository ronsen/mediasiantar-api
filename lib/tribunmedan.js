import axios from 'axios';
import * as cheerio from 'cheerio';

export const tribunmedan = async () => {
    let url = 'https://medan.tribunnews.com/siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('.art-list')
        .map((i, el) => {
            return {
                title: $(el).find('h3 > a').text().trim(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('src')
            }
        })
        .toArray();

    return { url, articles };
}