import axios from 'axios';
import * as cheerio from 'cheerio';

export const antarasumut = async () => {
    let url = 'https://sumut.antaranews.com/search?q=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('article')
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