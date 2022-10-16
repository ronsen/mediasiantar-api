import axios from 'axios';
import * as cheerio from 'cheerio';

export const rmolsumut = async () => {
    let url = 'https://www.rmolsumut.id/cari?q=siantar';
    let response = await axios.get(url);
    let body = await response.data;
    let $ = cheerio.load(body);

    let articles = $('article')
        .map((i, el) => {
            return {
                title: $(el).find('h2 > a').text().trim(),
                url: $(el).find('a').attr('href'),
                image: $(el).find('img').attr('data-src')
            }
        })
        .toArray();

    return { url, articles };
}