import axios from 'axios';
import * as cheerio from 'cheerio';

export const hetanews = async () => {
    let url = 'https://www.hetanews.com/category/pematangsiantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('.post')
        .map((i, el) => {
            return {
                title: $(el).find('.mb-1 > a').text(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('src')
            }
        })
        .toArray();

    return { url, articles };
}