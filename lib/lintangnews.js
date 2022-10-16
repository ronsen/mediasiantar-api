import axios from 'axios';
import * as cheerio from 'cheerio';

export const lintangnews = async () => {
    let url = 'https://lintangnews.com/?s=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('.td_module_wrap')
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