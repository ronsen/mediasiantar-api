import axios from 'axios';
import * as cheerio from 'cheerio';

export const bidiknewstoday = async () => {
    let url = 'https://bidiknewstoday.com/?s=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('.post')
        .map((i, el) => {
            return {
                title: $(el).find('h3 > a').text(),
                url: $(el).find('h3 > a').attr('href'),
                image: $(el).find('img').attr('src')
            }
        })
        .toArray();

    return { url, articles };
}